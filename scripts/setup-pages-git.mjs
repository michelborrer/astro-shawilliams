import fs from 'node:fs';

const toml = fs.readFileSync(
  `${process.env.APPDATA}/xdg.config/.wrangler/config/default.toml`,
  'utf8',
);
const token = toml.match(/oauth_token = "([^"]+)"/)?.[1];
if (!token) throw new Error('No wrangler oauth token found');

const accountId = 'd53f5e239245a237a4b9cc7ec499ccad';
const project = 'astro-shawilliams';
const repo = 'astro-shawilliams';

async function api(path, method = 'GET', body) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  console.log(`${method} ${path} → ${res.status}`);
  if (!json.success) console.log(JSON.stringify(json, null, 2));
  return json;
}

const action = process.argv[2] ?? 'relink';

if (action === 'inspect') {
  const projectData = await api(`/accounts/${accountId}/pages/projects/${project}`);
  if (projectData.success) {
    const r = projectData.result;
    console.log(JSON.stringify({
      name: r.name,
      subdomain: r.subdomain,
      domains: r.domains,
      github: r.source?.config,
      build_config: r.build_config,
      latest_stage: r.latest_deployment?.latest_stage,
      trigger: r.latest_deployment?.deployment_trigger,
      url: r.latest_deployment?.url,
    }, null, 2));
  }
}

if (action === 'delete') {
  const deleted = await api(`/accounts/${accountId}/pages/projects/${project}`, 'DELETE');
  if (!deleted.success) process.exit(1);
  console.log('Project deleted');
}

if (action === 'create') {
  const created = await api(`/accounts/${accountId}/pages/projects`, 'POST', {
    name: project,
    production_branch: 'main',
    source: {
      type: 'github',
      config: {
        owner: 'michelborrer',
        owner_id: '241949766',
        repo_name: repo,
        repo_id: '1298969118',
        production_branch: 'main',
        pr_comments_enabled: true,
        deployments_enabled: true,
        production_deployments_enabled: true,
        preview_deployment_setting: 'all',
        preview_branch_includes: ['*'],
      },
    },
    build_config: {
      build_command: 'npm run build',
      destination_dir: 'dist',
      root_dir: '',
    },
    deployment_configs: {
      production: {
        compatibility_date: '2026-07-13',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
      preview: {
        compatibility_date: '2026-07-13',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
    },
  });
  if (!created.success) process.exit(1);
  console.log('Project created:', created.result?.id);
}

if (action === 'relink') {
  const updated = await api(`/accounts/${accountId}/pages/projects/${project}`, 'PATCH', {
    source: {
      type: 'github',
      config: {
        owner: 'michelborrer',
        owner_id: '241949766',
        repo_name: repo,
        repo_id: '1298969118',
        production_branch: 'main',
        pr_comments_enabled: true,
        deployments_enabled: true,
        production_deployments_enabled: true,
        preview_deployment_setting: 'all',
        preview_branch_includes: ['*'],
      },
    },
    build_config: {
      build_command: 'npm run build',
      destination_dir: 'dist',
      root_dir: '',
    },
    deployment_configs: {
      production: {
        compatibility_date: '2026-07-13',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
      preview: {
        compatibility_date: '2026-07-13',
        env_vars: {
          NODE_VERSION: { type: 'plain_text', value: '22' },
        },
      },
    },
  });
  if (!updated.success) process.exit(1);
  console.log('GitHub connected:', updated.result?.source?.config?.repo_name);
}

if (action === 'deploy') {
  await api(`/accounts/${accountId}/pages/projects/${project}/deployments`, 'POST', {
    branch: 'main',
  });
}
