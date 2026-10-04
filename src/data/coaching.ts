import type { ImageMetadata } from 'astro';
import deepDivePortrait from '../assets/images/coaching-deep-dive-portrait.jpg';
import flightLeadership from '../assets/images/coaching-flight-leadership.jpg';
import teamImage from '../assets/images/coaching-team.jpg';
import { CALENDLY_URL } from '../lib/links';

export type ImagePosition = 'top' | 'face' | 'center' | 'bottom-right';

export type CoachingProgram = {
  slug: string;
  anchorId: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePosition: ImagePosition;
  who: string[];
  included: string[];
  hub: {
    eyebrow: string;
    summary: string;
    suitedTo: string;
    focus: string;
    runs: string;
  };
  ctaLabel: string;
  ctaHref: string;
};

export const coachingPrograms: CoachingProgram[] = [
  {
    slug: 'executive-deep-dive',
    anchorId: 'executive-deep-dive',
    title: 'Executive Deep Dive',
    shortTitle: 'The Executive Deep Dive',
    subtitle: 'For the leader who needs to know what no one else will tell them.',
    metaTitle: 'Executive Deep Dive for CEOs | Sharon Williams',
    metaDescription:
      'For CEOs and C-suite leaders: psychometric assessment and a 360 that names the derailer blocking performance.',
    image: deepDivePortrait,
    imageAlt: 'Sharon Williams at her desk',
    imagePosition: 'face',
    who: [
      "You're a high-performing CEO, C-suite executive, or senior director, and something isn't landing the way it should.",
      'On paper, everything looks right. In practice, something is costing you.',
      'People are managing around you, not with you — and no one will tell you why.',
      "You don't have a performance problem. You have a derailer you can't see. This is what I was trained to find.",
    ],
    included: [
      'Psychometric assessment battery, including 360-degree review and derailer identification',
      'Stakeholder interviews',
      'Diagnostic debrief and written report',
      'Targeted intervention strategy',
      '1:1 advisory sessions (typically 6–12 months)',
      'Reassessment to confirm behavioural shift',
    ],
    hub: {
      eyebrow: 'One leader',
      summary:
        'Choose this when the question is about one person. It looks for the pattern others are working around, then stays with that leader until the change can be checked.',
      suitedTo: 'A CEO, C-suite executive, or senior director',
      focus: 'A personal derailer',
      runs: 'An individual assessment, a written debrief, then 1:1 advisory',
    },
    ctaLabel: 'Book a Complimentary Consultation',
    ctaHref: CALENDLY_URL,
  },
  {
    slug: 'ceo-transition',
    anchorId: 'ceo-transition',
    title: 'The CEO Transition Program',
    shortTitle: 'The CEO Transition Program',
    subtitle: 'For the leader stepping into a role where the margin for error is zero.',
    metaTitle: 'CEO Transition Coaching | Sharon Williams',
    metaDescription:
      'For new CEOs and managing directors: a 100-day plan based on how you lead under pressure, with fortnightly advice.',
    image: flightLeadership,
    imageAlt: 'Flight leadership course',
    imagePosition: 'center',
    who: [
      "You've just been appointed to a CEO, Managing Director, or senior executive role, or you will be within the next quarter.",
      "The board is watching. Your new team is forming first impressions before you've had your second meeting. The organisation expects you to hit the ground running, but the traits that earned you this role aren't necessarily the ones that will make you succeed in it.",
      'The first 100 days will define your tenure. This is where I come in.',
    ],
    included: [
      'Psychometric assessment battery including derailer identification',
      'Stakeholder mapping and political landscape analysis',
      'Psychologically-informed 100-Day Plan',
      'Fortnightly 1:1 advisory sessions across the first 100 days',
      'Real-time counsel on critical early decisions',
      'Post-transition review and forward strategy',
    ],
    hub: {
      eyebrow: 'A new role',
      summary:
        'Choose this when the question is the new seat. The work is the opening months: where this leader is likely to trip, who around them matters, and which decisions should not wait.',
      suitedTo: 'A new or incoming CEO, managing director, or senior executive',
      focus: 'The opening months in the role',
      runs: 'A transition plan with fortnightly advisory',
    },
    ctaLabel: 'Book a Complimentary Consultation',
    ctaHref: CALENDLY_URL,
  },
  {
    slug: 'team-reset',
    anchorId: 'team-reset',
    title: 'The High-Performance Team Reset',
    shortTitle: 'The High-Performance Team Reset',
    subtitle:
      "For the leadership team that's either your greatest asset or your biggest risk. I help you determine which, and act accordingly.",
    metaTitle: 'Leadership Team Reset | Sharon Williams',
    metaDescription:
      'For senior teams stuck in silos: assess each leader, map how the team works, then reset the way they operate.',
    image: teamImage,
    imageAlt: 'Senior leadership team',
    imagePosition: 'center',
    who: [
      'You lead, or sit on, a senior leadership team that looks capable on paper but operates in silos, avoids accountability, and defaults to politics over strategy.',
      "Offsites produce energy that evaporates by Monday. Consultants have come and gone. The dysfunction persists — because no one has diagnosed what's actually driving it. You don't need another team-building exercise.",
      'You need a psychologist. This is where the diagnostic begins.',
    ],
    included: [
      'Psychometric assessment of each team member including derailer identification',
      '360-degree feedback across the team',
      '1:1 diagnostic debriefs with each leader',
      'Team dynamics mapping and risk analysis',
      'Facilitated team recalibration sessions',
      'Advisory to embed new operating rhythms (typically 6–12 months)',
    ],
    hub: {
      eyebrow: 'The team',
      summary:
        'Choose this when the question is the group, not one person. It diagnoses how the team actually works, then rebuilds the rhythm they use after the offsite is over.',
      suitedTo: 'A senior leadership team',
      focus: 'How the team operates together',
      runs: 'Individual diagnostics, then facilitated work with the whole team',
    },
    ctaLabel: 'Book a Complimentary Consultation',
    ctaHref: CALENDLY_URL,
  },
];

export const howIWork = [
  {
    title: 'Diagnostic',
    body:
      "I don't start with your goals. I start with your data. A clinical psychometric assessment battery, 360-degree feedback, and stakeholder interviews, designed to reveal the behavioural patterns that no amount of self-reflection can reach.",
  },
  {
    title: 'Precise',
    body:
      'I identify your specific derailers, the traits that surface under pressure and silently erode trust, judgement, and team performance. Every strategy is built around what the data reveals. Not a development plan. A diagnostic intervention.',
  },
  {
    title: 'Sustained',
    body:
      'Insight alone changes nothing. I work alongside you as the patterns surface in real time — in the boardroom, in difficult conversations, in the moments that define your leadership. Then I reassess using the same measures to prove the shift has taken root.',
  },
];

export const coachingOutcomes = [
  "They understand how they're perceived, through data, not guesswork",
  'They stop triggering the reactions they never intended',
  'They build teams on trust and accountability, not politics and avoidance',
  'They make decisions under pressure without reverting to old patterns',
  "They sustain the change, because it's built on awareness, not willpower",
];

export function getCoachingProgram(slug: string): CoachingProgram | undefined {
  return coachingPrograms.find((p) => p.slug === slug);
}
