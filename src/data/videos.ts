export type VideoCategory =
  | 'Leadership Strategy & Performance'
  | 'Leadership Lessons from the Cockpit';

export type Video = {
  slug: string;
  title: string;
  category: VideoCategory;
  youtubeId: string;
  description: string;
  published?: string;
};

export const videoCategories: VideoCategory[] = [
  'Leadership Strategy & Performance',
  'Leadership Lessons from the Cockpit',
];

export const videos: Video[] = [
  {
    slug: 'cognitive-fatigue',
    title: 'Cognitive Fatigue',
    category: 'Leadership Strategy & Performance',
    youtubeId: 'K71vVlfOJ_c',
    description:
      'How cognitive fatigue undermines executive decision-making — and what senior leaders can do to protect clarity under sustained pressure.',
    published: '2022-08-15',
  },
  {
    slug: 'when-ego-and-optimism-are-not-your-friends',
    title: 'When ego and optimism are not your friends',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: 'pTOwCyjpNVk',
    description:
      'Leadership lessons from aviation: why unchecked ego and blind optimism create risk at the top — and how to course-correct before it costs you.',
    published: '2022-07-20',
  },
  {
    slug: 'why-strategy-time-should-be-your-priority',
    title: 'Why Strategy Time Should be your Priority',
    category: 'Leadership Strategy & Performance',
    youtubeId: '0BI3MtGz4jQ',
    description:
      'Why CEOs and C-suite leaders must protect strategy time — and how operational urgency quietly crowds out the thinking that drives lasting results.',
    published: '2022-08-01',
  },
  {
    slug: 'faking-it-vs-persistence',
    title: 'Faking it vs Persistence',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: '407F1ask3TE',
    description:
      'The difference between performing confidence and building real competence — a cockpit lesson for leaders navigating high-stakes transitions.',
    published: '2022-07-10',
  },
  {
    slug: 'how-your-dark-side-can-self-sabotage-your-leadership',
    title: 'How Your Dark Side Can Self-Sabotage Your Leadership',
    category: 'Leadership Strategy & Performance',
    youtubeId: 'xe60kd6sl0I',
    description:
      'The hidden derailers that drive success until they do not — how perfectionism, over-functioning and other dark-side traits sabotage senior leaders.',
    published: '2022-08-10',
  },
  {
    slug: 'make-a-decision',
    title: 'Make a decision',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: 'f_b3H5cqnUI',
    description:
      'Why decisive action matters under uncertainty — and what pilots can teach executives about committing when the data is incomplete.',
    published: '2022-07-05',
  },
  {
    slug: 'when-you-really-truly-believe',
    title: 'When you really truly believe…',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: 'm7XTS7C4zXk',
    description:
      'How conviction shapes leadership — and when belief becomes a blind spot that prevents you from seeing what your team already knows.',
    published: '2022-07-01',
  },
  {
    slug: 'why-elite-performers-have-a-morning-routine',
    title: 'Why Elite Performers have a Morning Routine',
    category: 'Leadership Strategy & Performance',
    youtubeId: '5n23lD-Xtss',
    description:
      'What elite performers know about morning routines — and why structure at the start of the day compounds into better decisions all day long.',
    published: '2022-08-05',
  },
  {
    slug: 'do-the-work',
    title: 'Do the work!',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: 'W7n5e0wDV1A',
    description:
      'There is no shortcut past the work. A direct leadership lesson on discipline, preparation and doing what others avoid.',
    published: '2022-06-28',
  },
  {
    slug: 'just-fix-it-immediately',
    title: 'Just fix it! Immediately.',
    category: 'Leadership Lessons from the Cockpit',
    youtubeId: 'JO8cE0cz2tY',
    description:
      'Why small problems become leadership crises when left unaddressed — and why fixing issues immediately is a non-negotiable executive habit.',
    published: '2022-08-18',
  },
  {
    slug: 'recovery-time',
    title: 'Recovery Time',
    category: 'Leadership Strategy & Performance',
    youtubeId: 'vF9Ql2nEpaI',
    description:
      'Recovery is not optional for high performers. Why senior leaders need deliberate recovery time to sustain judgement, energy and presence.',
    published: '2022-08-22',
  },
  {
    slug: 'do-you-make-your-bed',
    title: 'Do You Make Your Bed?',
    category: 'Leadership Strategy & Performance',
    youtubeId: '6n0EqOLHR04',
    description:
      'Small disciplines signal larger leadership habits. What making your bed reveals about accountability, standards and follow-through at the top.',
    published: '2022-08-25',
  },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getRelatedVideos(slug: string, limit = 4): Video[] {
  const current = getVideoBySlug(slug);
  if (!current) return videos.slice(0, limit);
  return videos
    .filter((v) => v.slug !== slug)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}

export function getVideoThumbnail(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}
