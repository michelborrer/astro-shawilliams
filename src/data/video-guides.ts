import { videos } from './videos';

export const VIDEO_GUIDE_UPDATED = '2026-10-04';

export type CoachingSlug = 'executive-deep-dive' | 'ceo-transition' | 'team-reset';

export type VideoChapter = {
  time: string;
  label: string;
};

export type VideoGuide = {
  durationSeconds: number;
  coachingSlug: CoachingSlug;
  coachingNote: string;
  summary: string;
  takeaways: string[];
  chapters: VideoChapter[];
  transcript: string[];
};

export function chapterStartSeconds(time: string): number {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

export function isoDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `PT${minutes}M${remainder}S`;
}

export const videoGuides: Record<string, VideoGuide> = {
  'cognitive-fatigue': {
    durationSeconds: 162,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'If decision quality is dropping under sustained pressure, the Executive Deep Dive is where Sharon identifies what is using that capacity and what to change.',
    summary:
      'Sharon describes the cognitive fatigue she sees in leaders after years of COVID pressure. Decision quality is a limited daily resource, closer to a phone battery than an unlimited skill. She points to Roy Baumeister’s research, the way Barack Obama reduced trivial choices, and sleep as the main way to recharge.',
    takeaways: [
      'Decision quality drops as the day’s choices pile up.',
      'Automate low-stakes choices so the real decisions still have fuel.',
      'Running out of willpower late in the day is a resource problem.',
      'Sleep is the first way to restore the capacity to decide well.',
    ],
    chapters: [
      { time: '0:00', label: 'Leaders who are cognitively fatigued' },
      { time: '0:14', label: 'Decision-making runs out like a phone battery' },
      { time: '0:50', label: 'Automate the decisions that do not matter' },
      { time: '1:52', label: 'Sleep is how you recharge' },
    ],
    transcript: [
      'A lot of the leaders Sharon works with were already tired before COVID, and two further years of it left them cognitively fatigued. The phrase means something specific: there is only so much high-quality brain power available in a day.',
      'She compares the brain to a phone. When the battery is flat, it is flat. There are no spare resources for a high-quality decision. That is why someone can eat well all day and still finish on the couch with a tub of Ben & Jerry’s. The willpower to say no has already been spent.',
      'She cites Roy Baumeister, whose research on this runs for about thirty years, and the story of Barack Obama hearing that work and wearing blue shirts and grey suits so he would not spend cognitive resources on a wardrobe. The same breakfast, the same lunch, the same café. The aim is to automate as many ordinary decisions as possible, because decision-making capacity falls with every choice.',
      'Her clients want that capacity for the decisions at work, not for breakfast. The other half of the phone metaphor is charging it. Baumeister’s first recommendation, as she puts it, is sleep. Automate what you can, and protect a proper night’s sleep, and cognitive fatigue eases enough for better decisions through the day.',
    ],
  },
  'when-ego-and-optimism-are-not-your-friends': {
    durationSeconds: 196,
    coachingSlug: 'ceo-transition',
    coachingNote:
      'Forcing the original plan is a common risk in a new CEO seat. The CEO Transition Program is built for the early decisions, including the ones that need a different approach.',
    summary:
      'In the cockpit, a go-around is the disciplined choice when the approach is no longer safe. Sharon says ego and optimism are what make a pilot, or a leader, force the landing anyway. Changing course is not the failure. Forcing a bad approach is.',
    takeaways: [
      'A go-around is a performance decision, not proof that you failed.',
      'Ego wants the original plan. Optimism insists it will still work.',
      'The costly mistake is continuing after the conditions have changed.',
      'Find another way in, then commit to that path.',
    ],
    chapters: [
      { time: '0:00', label: 'What a go-around is' },
      { time: '0:32', label: 'When ego and optimism take over' },
      { time: '1:11', label: 'Missing the landing is not the failure' },
      { time: '2:21', label: 'Find another way in' },
    ],
    transcript: [
      'For anyone outside aviation, a go-around is what you do on approach when something is wrong: full power, and another circuit, rather than forcing the landing. Sharon says she is still working the leadership lesson out for herself, because ego gets in the way. You want to land. A positive outlook says you can still make it.',
      'A gust, a crosswind, an approach that is too steep or too fast — any of those is a reason to go around. In life she used to treat a missed landing as a personal failure. The actual failure would be trying to land in a crosswind she cannot handle, or so steep and fast that the aeroplane hits nose-first, or so high that it balloons and flips.',
      'Treating the change of plan as a mistake misses the point. Going around, and asking how else to do it, is the higher-performance choice. Sometimes the honest move is to drop the ego and the optimism that says the original plan must work. Go around, go under, go over, or come at it another way, and put full power into that. Persistence is not the same thing as banging your head against the wall.',
    ],
  },
  'why-strategy-time-should-be-your-priority': {
    durationSeconds: 172,
    coachingSlug: 'ceo-transition',
    coachingNote:
      'Protecting thinking time is part of how a CEO spends the early months in the role. The CEO Transition Program treats that calendar as a leadership decision.',
    summary:
      'Sharon argues that the leaders she studies treat thinking time as a diary appointment, not a leftover. She cites Jeff Weiner’s daily block, Warren Buffett’s sparse calendar, and Charlie Munger’s line that next Tuesday might only say “haircut.” Her invitation is to start with fifteen minutes and protect it.',
    takeaways: [
      'Strategy time has to be booked before the day fills itself.',
      'Buffett and Weiner protected thinking time throughout their careers, not only once they had room for it.',
      'An hour at home, in a café, or with a journal still counts.',
      'Leaders who try half an hour usually come back wanting more.',
    ],
    chapters: [
      { time: '0:00', label: 'Thinking time as a non-negotiable' },
      { time: '0:12', label: 'Weiner, Buffett and Munger' },
      { time: '1:13', label: 'Block it before the day starts' },
      { time: '1:48', label: 'Start with fifteen minutes' },
    ],
    transcript: [
      'Sharon says the successful CEOs and leaders she points clients to make thinking time, or strategy time, non-negotiable in the diary. Jeff Weiner, then CEO of LinkedIn, spent a minimum of two hours a day in uninterrupted thinking. Warren Buffett, she notes, has said he spends about eighty per cent of his time thinking, and he did that from the start of his career, not only once the money made it easy.',
      'Charlie Munger, Buffett’s partner for more than forty years, is her source for the diary test: look at what Warren is doing next Tuesday and you may only find a haircut. The calendar stays clear because the insights and the strategy come from the thinking, not from a fuller schedule. She also points to another of her videos on sleep: Buffett would send people home to rest if he wanted them at their best.',
      'She asks clients to block strategy time first, ideally in the morning before the day gets ahead of them. If the office interrupts, do it at home, or stop at a café with a pen and a journal, or read something useful before work. People who say they do not have an hour are asked to try thirty minutes. They usually return saying thirty is not enough. If even that will not fit, start with fifteen, in the morning or elsewhere in the day. The white space, she says, is where the better ideas and the better decisions come from.',
    ],
  },
  'faking-it-vs-persistence': {
    durationSeconds: 168,
    coachingSlug: 'ceo-transition',
    coachingNote:
      'A new role punishes performed confidence. The CEO Transition Program is for leaders who need the job to become competent, not merely convincing.',
    summary:
      'Learning to fly means tracking height, power, speed, trim, flap, attitude, traffic and the tower at once. Sharon says “fake it till you make it” is the wrong method for a skill that has to become muscle memory. Persistence, repetition and patience are what make it click.',
    takeaways: [
      'Some skills punish performed confidence.',
      'Repetition is how a new skill leaves conscious effort.',
      'Rehearsing the circuit, or the equivalent in your own work, is part of the practice.',
      'The tipping point comes after many repetitions, not after one confident attempt.',
    ],
    chapters: [
      { time: '0:00', label: 'Why flying feels like too much at once' },
      { time: '0:33', label: 'Persistence instead of faking it' },
      { time: '0:59', label: 'Turn the skill into muscle memory' },
      { time: '1:57', label: 'Keep going until it clicks' },
    ],
    transcript: [
      'Flying is hard, and landing is harder. Sharon lists what has to be tracked at once: height, power, speed, the trim wheel, the flap setting, nose attitude, the horizon, other aircraft, and what the tower is saying while she is talking. It is easy, in the middle of that, to decide you are not good at it and never will be.',
      'She allows that “fake it till you make it” is useful in some parts of life. Learning a new skill is the opposite case. If you want to be genuinely good, the skill has to become muscle memory. She walks circuits on the ground in the morning, flying them in her head, because the sooner she does not have to think about each step, the sooner it clicks. Performing confidence in the cockpit would be a recipe for a bad outcome.',
      'The same rule applies to a sport, a tool, a new technology, or a system at work. Be patient and do it again until it is in the body. Nobody gets fit from one visit to the gym. After enough repetitions there is a tipping point, and what was effort becomes intuitive. If you actually want to learn it, keep going.',
    ],
  },
  'how-your-dark-side-can-self-sabotage-your-leadership': {
    durationSeconds: 115,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'Naming derailers, and the payoff that keeps them, is the centre of the Executive Deep Dive.',
    summary:
      'Sharon says every leader has a dark side: behaviours that appear under stress and quietly undo the work. The coaching starts by naming those derailers and the payoff that keeps them in place, then finding a cleaner way to get the same reward.',
    takeaways: [
      'Derailers stay in charge while they stay unnamed.',
      'Stress and overload are when the pattern shows up.',
      'A hidden payoff is why the behaviour survives good intentions.',
      'The work is to keep the reward and drop the self-sabotage.',
    ],
    chapters: [
      { time: '0:00', label: 'Every leader has a dark side' },
      { time: '0:25', label: 'Name the derailers' },
      { time: '0:49', label: 'Notice the payoff' },
      { time: '1:17', label: 'Find another way to get the reward' },
    ],
    transcript: [
      'Everyone has a dark side, Sharon says, including her, and including the CEOs and executives she works with. The problem is awareness. The behaviours that appear when someone is stressed or overwhelmed sit on that side of the personality, and if they are not named they cannot be changed.',
      'The tool she uses starts by identifying derailers: what the person does, or is liable to do, that makes them come unstuck under pressure. Those behaviours self-sabotage. They are even harder to shift when there is a payoff, a comfort in them, because the payoff trains the person to keep going.',
      'Identification is only the first step. With the debrief and the coaching, the work is to reverse the payoff or to get the same reward in a more sustainable way, so the dark-side behaviour is no longer required. Unearth it, then remove the version that is not serving the leader.',
    ],
  },
  'make-a-decision': {
    durationSeconds: 107,
    coachingSlug: 'ceo-transition',
    coachingNote:
      'Early in a role, waiting for a perfect choice is its own risk. The CEO Transition Program includes real-time counsel on the decisions that should not wait.',
    summary:
      'Another aircraft entered the circuit at Jandakot and Sharon’s first response was to freeze. The instruction she uses is simpler: decide, back the decision, and change it if the tower or the conditions say so. Waiting between two options is what turns a small uncertainty into a larger problem.',
    takeaways: [
      'Decide, then stay observant.',
      'Backing yourself includes being willing to revise.',
      'Procrastinating between two options is still a decision not to act.',
      'A fast decision you can correct beats a freeze.',
    ],
    chapters: [
      { time: '0:00', label: 'Another aircraft in the circuit' },
      { time: '0:14', label: 'Decide and back yourself' },
      { time: '1:04', label: 'Stop waiting between A and B' },
    ],
    transcript: [
      'Sharon was flying circuits at Jandakot when another aircraft came into the flight path. Her first reaction was to panic. What her instructors had taught her was to make a decision, back it, and fix it if it was wrong.',
      'She talked herself through the facts. It is an airport, so there are other aircraft. She needed to know it was at a different height, and she needed to listen in case the tower told her to do something else. She decided to keep flying the circuit, watch the other aircraft, and stay observant. She made that decision immediately. If the tower had given her different information, she would have changed it. In this case it was fine, and the panic had not been required.',
      'She asks how often the same freeze shows up away from the airfield: should I do A or B, so I do neither, and the problem grows. The lesson she wants is to decide quickly, back yourself, and if it is wrong, change it and make the next decision work.',
    ],
  },
  'when-you-really-truly-believe': {
    durationSeconds: 113,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'The shift in this video is internal: belief changed the performance. The Executive Deep Dive is Sharon’s work on the patterns a leader cannot see clearly alone.',
    summary:
      'Sharon uses Henry Ford’s line — whether you think you can, or think you can’t, you are right — on the day her flying changed. She had trained herself to focus deeply on one thing, and she did not believe she could manage a cockpit. After someone she trusted told her she could, the next circuit was clean, with the instructor’s hands in his lap.',
    takeaways: [
      'Self-belief changed the flying before the technique did.',
      'A trusted person’s conviction can unlock a belief you will not grant yourself.',
      'The result showed up on the next circuit, then the one after it.',
      'The same sentence cuts both ways: doubt is also a decision.',
    ],
    chapters: [
      { time: '0:00', label: 'Whether you think you can' },
      { time: '0:11', label: 'Flying without self-belief' },
      { time: '0:42', label: 'Someone she trusted said she could' },
      { time: '1:08', label: 'The next circuit was different' },
    ],
    transcript: [
      'Sharon opens with Henry Ford: whether you think you can, or you think you can’t, you are right. For a long time she did not believe she could fly. She says she was poor at it early on. Fifteen years of meditating twice a day had made her good at focusing on one thing. A cockpit asks for many things at once, and the self-belief was not there.',
      'Then someone whose opinion she respected told her she could do it. She thought about that overnight. The next day, flying circuits at Jandakot, she flew a clean first circuit. Her instructor said he had done nothing. His hands had stayed in his lap. She did it again, and when he asked what was different, she said she had started to believe she could.',
      'The video closes on the same line it opened with. In her account, the belief came first and the performance followed.',
    ],
  },
  'why-elite-performers-have-a-morning-routine': {
    durationSeconds: 143,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'A morning routine is only useful if it protects judgement. The Executive Deep Dive looks at whether a leader’s patterns support the decisions the role requires.',
    summary:
      'When clients asked what world-class performers do in the morning, Sharon points to Tim Ferriss’s Tools of Titans. About eighty per cent of the people he interviewed used some form of meditation, from a mindful walk to sitting still. She pairs that with movement and sleep, because a leader’s highest-value work is a clear decision.',
    takeaways: [
      'Most of the performers Ferriss studied meditated in some form.',
      'Movement and mindfulness are there to clear the mind.',
      'Sleep is part of the routine, not a separate virtue.',
      'One honest minute is a valid start.',
    ],
    chapters: [
      { time: '0:00', label: 'What her clients asked about' },
      { time: '0:14', label: 'What Tools of Titans found' },
      { time: '0:54', label: 'Clear the mind before the decisions' },
      { time: '1:42', label: 'Start with the time you have' },
    ],
    transcript: [
      'Sharon asked clients what they wanted to understand, and many of them said the morning routine: what world-class performers do at the start of the day. She points to Tim Ferriss, who had already done that work in Tools of Titans, interviewing performers across athletics, business, science, art, music and sport.',
      'His finding, as she reports it, is that about eighty per cent did some form of meditation in the morning. That might be a mindful walk or swim, journaling, or sitting down to meditate. The pattern she draws from it is physical exercise for the body and some kind of mindfulness for the mind, so the day starts with white space and clearer thinking.',
      'She ties that to the job of a leader. The highest value they bring is a high-quality decision, and that depends on clearing clutter: a proper night’s sleep, then a mindful start and some movement. She invites people to take an hour if they have it, or twenty minutes, or ten, or one. Everyone has a minute. Start there, build the routine, and she says people do not give it up once they feel the difference.',
    ],
  },
  'do-the-work': {
    durationSeconds: 139,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'Preparation and an honest debrief are how Sharon works in the Executive Deep Dive, not only how she flies.',
    summary:
      'A flight in a de Havilland Chipmunk still required a pre-flight checklist and a cleanup afterwards, including degreasing the outside of the aircraft. Sharon applies the same shape to coaching: prepare for where the client actually is, then ask what went well, what could have been better, and what she would change.',
    takeaways: [
      'The rewarding part sits between preparation and cleanup.',
      'A checklist exists because skipping it has consequences.',
      'A short debrief is how the next attempt improves.',
      'The same discipline applies to work, sport and hobbies.',
    ],
    chapters: [
      { time: '0:00', label: 'The flight is not the whole job' },
      { time: '0:22', label: 'Do the pre-flight' },
      { time: '0:42', label: 'Do the cleanup' },
      { time: '1:23', label: 'Use the same debrief at work' },
    ],
    transcript: [
      'A friend took Sharon flying in a de Havilland Chipmunk. They flew down to Murray Field and back, and she was ready to leave for a dance class. That is not how it works. Before you get into an aircraft you do a pre-flight: a checklist, every time, because the cost of skipping it is not the same as skipping it in a car.',
      'Afterwards there is cleanup. Her friend took the inside and the engine, and her job was to put on overalls and degrease the outside for the owner. You cannot, she says, jump into the rewarding part and expect the benefit without the preparation and the work after.',
      'She uses the same shape in coaching. She does not walk into a session without preparing for where the client is and what they need. After a session or a workshop she asks what went well, what could have gone better, what she would do differently, and what she learned. A short debrief, in work or in a hobby, is what makes the next time better. Do the pre-flight, then do the cleanup.',
    ],
  },
  'just-fix-it-immediately': {
    durationSeconds: 123,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'Leaving a small fault until it is a crisis is a leadership pattern. The Executive Deep Dive is for finding the habits that let those faults sit.',
    summary:
      'Sharon’s flying mentor answered uneven wings, an unsteady nose and a wind-affected approach with the same instruction: fix it immediately. She took that into ordinary life, including an oil warning light she used to leave on. Small corrections, repeated, keep little problems from becoming the leadership issue.',
    takeaways: [
      'Correct the deviation as soon as you see it.',
      'Delay is what turns a small fault into an expensive one.',
      'The habit is proactive: you lead the problem instead of reacting to it.',
      'She suggests trying the rule for three weeks.',
    ],
    chapters: [
      { time: '0:00', label: 'Just fix it, immediately' },
      { time: '0:48', label: 'The same rule off the airfield' },
      { time: '1:12', label: 'Fix the small problem before it grows' },
    ],
    transcript: [
      'Sharon told a mentor at her flying school that she was having trouble keeping the wings level. He said to fix it, straight away. The same answer came back for the nose, which climbed when she looked at the trim and wandered when she checked speed or power, and for landings that were being rocked by the wind. Just fix it. Immediately.',
      'She carried the instruction off the airfield. When the oil light came on in the car, she took it to the garage instead of leaving the light on for a month, as she had done before. The small repair, she says, probably saved her a much larger bill.',
      'The question she leaves is how many parts of life get postponed until they are a bigger problem. You may not be flying a Cessna 152. When something is wrong, fix it immediately, and try doing that for three weeks. Little problems get handled before they grow, and the mentality shifts from reacting to being on top of them.',
    ],
  },
  'recovery-time': {
    durationSeconds: 116,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'Judgement depends on recovery. The Executive Deep Dive looks at the pressure patterns that make rest feel optional.',
    summary:
      'Sharon says peak-performance research treats recovery as the work, not the interruption. The people who never stop are not the model. She recommends a short break every sixty to ninety minutes, a real lunch, and at least one device-free day a week, because the day you return is often the strongest.',
    takeaways: [
      'Non-stop work used to look heroic. The research she cites does not support that.',
      'A five-to-seven-minute break every sixty to ninety minutes is the rhythm she recommends.',
      'Lunch needs twenty to thirty minutes, not a meeting with food.',
      'One or two days fully away from work and devices lifts the days you come back.',
    ],
    chapters: [
      { time: '0:00', label: 'Recovery is what peak performers do' },
      { time: '0:31', label: 'Breaks through the working day' },
      { time: '0:47', label: 'Take a real day off' },
      { time: '1:27', label: 'Rest like a professional' },
    ],
    transcript: [
      'Peak-performance writing, Sharon says, talks about recovery at length, because people still miss it. In the 1980s the hero was the person who worked the hardest and the fastest and did not stop for sleep or lunch. She says we now know that person is not the model. The people who take breaks are the peak performers across industries.',
      'The rhythm she recommends is a short recovery of five to seven minutes after every sixty to ninety minutes, and a lunch break of at least twenty to thirty minutes. There is also a weekly break: at least one day off, away from devices and away from work. Two days is better. If Saturday and Sunday are actually off, the day you return is often the highest-performing day of the week. Sometimes the strength shows up on the second day back. Either way, one or two days of recovery lifts what you can do when you are working.',
      'Her close is direct. Do not skip the recovery. Take it every ninety minutes or so, take lunch, and keep a device-free Sunday, or a full weekend if you can.',
    ],
  },
  'do-you-make-your-bed': {
    durationSeconds: 112,
    coachingSlug: 'executive-deep-dive',
    coachingNote:
      'Standards on the small tasks show up in the large ones. The Executive Deep Dive is where Sharon tests whether those standards hold under pressure.',
    summary:
      'Sharon borrows Admiral William H. McRaven’s point that making the bed is a serious start to the day. Done properly, it gives the brain one completed task in the first five minutes and a reason to take the next one. If the small standard slips, the larger work has nothing to stand on.',
    takeaways: [
      'A mundane task, done properly, tells you the day has already started well.',
      'The first completed task makes the next one easier to begin.',
      'The standard is diligence, not the bed itself.',
      'Small tasks are the evidence you can be trusted with the important ones.',
    ],
    chapters: [
      { time: '0:00', label: 'Start by making the bed' },
      { time: '0:33', label: 'The first completed task of the day' },
      { time: '1:09', label: 'If the small task slips' },
    ],
    transcript: [
      'Sharon takes the point from US Navy Admiral William H. McRaven’s university speech: if you want to change the world, start by making your bed. It sounds facetious. Done to a proper standard, and done mindfully, it sets up the rest of the day. She connects it to the morning routine.',
      'The task tells the brain that one thing is already finished, in the first five minutes out of bed, and finished well. The next question is what to work on next. One completed task encourages another, and by the end of the day there is a run of work behind you, some of it simple and some of it not.',
      'She then turns the question around. If you will not take a couple of extra minutes to do a simple task properly, where does the organisation and diligence for the important work come from? If the little things are not done right, the big things will not be either.',
    ],
  },
};

for (const video of videos) {
  if (!videoGuides[video.slug]) {
    throw new Error(`Missing video guide for ${video.slug}`);
  }
}
