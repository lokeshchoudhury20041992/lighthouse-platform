/* ==========================================================================
   Lighthouse — single source of truth for everything the copy touches.
   Edit here, not in the components.
   ========================================================================== */

export const CLINIC = {
  name: 'LIGHTHOUSE',
  tagline: 'Better Tomorrow',
  established: 2018,
  /** Kept as a function so the site never goes stale on the 1st of January. */
  yearsRunning: () => new Date().getFullYear() - 2018,
  locality: 'Ramkrishnapur, Howrah',
  region: 'West Bengal, India',
  landmark: 'Near Heritage School, opposite Biswakalyan Club',
  phones: ['6293163651', '6293171565'],
  // TODO(client): confirm the public enquiry inbox before launch.
  email: '',
  website: 'https://www.lighthousefocus.com/',
  mapsUrl: 'https://goo.gl/maps/vVRboxnEM29ysGZN9?coh=178572&entry=tt',
  reviewUrl: 'https://g.page/r/CTNfZEsoldP0EAE/review',
  arriveEarlyMinutes: 15,
} as const

export const whatsappLink = (phone: string, message: string) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`

export const BOOKING_MESSAGE =
  'Hello Lighthouse, I would like to book an appointment. Could you share the available slots?'

export const PRIMARY_WHATSAPP = whatsappLink(CLINIC.phones[0], BOOKING_MESSAGE)

/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Astro-Psychology', to: '/astro-psychology' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
] as const

/* -------------------------------------------------------------------------- *
   The six qualities the lighthouse stands for. Straight from the brand story.
 * -------------------------------------------------------------------------- */

export const BEACON_VALUES = [
  {
    key: 'light',
    word: 'Light',
    sub: 'Awareness',
    body: 'Helping people see what may previously have remained unclear.',
  },
  {
    key: 'guidance',
    word: 'Guidance',
    sub: 'Direction',
    body: 'Helping individuals explore possible ways forward.',
  },
  {
    key: 'safety',
    word: 'Safety',
    sub: 'Support',
    body: 'Creating a compassionate environment in which people can speak openly.',
  },
  {
    key: 'strength',
    word: 'Strength',
    sub: 'Resilience',
    body: 'Helping people recognise their ability to face difficult periods.',
  },
  {
    key: 'hope',
    word: 'Hope',
    sub: 'Possibility',
    body: 'Reminding people that a difficult chapter does not define the whole story.',
  },
  {
    key: 'meaning',
    word: 'Meaning',
    sub: 'Self-discovery',
    body: 'Exploring not only “what is happening to me?” but “what can I learn from it?”',
  },
] as const

/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string
  title: string
  blurb: string
  detail: string
  group: 'Therapy & Counselling' | 'Assessment' | 'Life Stages' | 'Reflective Practice'
  forWhom: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'psychological-counselling',
    title: 'Psychological Counselling',
    blurb: 'A confidential space to think aloud, with someone trained to listen.',
    detail:
      'One-to-one sessions built around what you are actually carrying — not a script. We begin by understanding the concern in your own words, agree on what would count as progress, and work at a pace that feels survivable.',
    group: 'Therapy & Counselling',
    forWhom: ['Low mood', 'Overwhelm', 'Life transitions', 'Loss of direction'],
  },
  {
    slug: 'anxiety-and-stress',
    title: 'Anxiety & Stress Management',
    blurb: 'Practical tools for a nervous system stuck in the on position.',
    detail:
      'Structured work on the thoughts, habits and bodily patterns that keep anxiety running. Expect breathing and grounding practice, cognitive work on catastrophic prediction, and a gradual return to the situations that have been avoided.',
    group: 'Therapy & Counselling',
    forWhom: ['Panic', 'Health anxiety', 'Overthinking', 'Workplace stress'],
  },
  {
    slug: 'depression-therapy',
    title: 'Depression Therapy',
    blurb: 'Compassionate, structured support through a flat and heavy season.',
    detail:
      'Evidence-based therapy for persistent low mood, using behavioural activation to rebuild momentum and cognitive work to loosen the harshest self-judgements. Risk is reviewed openly and referred onward where medical care is needed.',
    group: 'Therapy & Counselling',
    forWhom: ['Persistent low mood', 'Loss of interest', 'Sleep disruption', 'Self-criticism'],
  },
  {
    slug: 'couples-and-marriage',
    title: 'Couples & Marriage Counselling',
    blurb: 'Two people, one room, and a fairer way of having the same argument.',
    detail:
      'Sessions focus on the pattern rather than the verdict — how conflict starts, what each partner is protecting, and where repair breaks down. Suitable for couples deciding whether to continue as much as those rebuilding.',
    group: 'Therapy & Counselling',
    forWhom: ['Recurring conflict', 'Communication breakdown', 'Trust and repair', 'Pre-marital work'],
  },
  {
    slug: 'family-counselling',
    title: 'Family Counselling',
    blurb: 'When the difficulty sits between people rather than inside one of them.',
    detail:
      'Whole-family or partial-family sessions that map how roles, expectations and loyalties are organised at home, and negotiate changes everyone can live with. Often paired with individual work for one member.',
    group: 'Therapy & Counselling',
    forWhom: ['Inter-generational conflict', 'Caregiver strain', 'Separation', 'Bereavement'],
  },
  {
    slug: 'neuropsychological-assessment',
    title: 'Neuropsychological Assessment',
    blurb: 'A careful measure of attention, memory and executive function.',
    detail:
      'Standardised testing that produces a written profile of cognitive strengths and difficulties, with practical recommendations for school, work or medical follow-up. Assessment days run longer than a standard session.',
    group: 'Assessment',
    forWhom: ['Memory concerns', 'Post-injury review', 'Cognitive change', 'Medical referral'],
  },
  {
    slug: 'psychometric-testing',
    title: 'Psychological & Psychometric Testing',
    blurb: 'Structured questions where a conversation alone is not enough.',
    detail:
      'Personality, intelligence, aptitude and clinical inventories administered and interpreted by trained practitioners, with the findings explained to you in plain language rather than handed over as a score sheet.',
    group: 'Assessment',
    forWhom: ['Diagnostic clarity', 'Career direction', 'Educational planning', 'Second opinion'],
  },
  {
    slug: 'child-psychology',
    title: 'Child Psychology',
    blurb: 'Play, patience, and parents kept in the loop.',
    detail:
      'Developmentally-appropriate assessment and therapy for younger children, with parents treated as collaborators. Where a school is involved, we can share written recommendations with the family’s consent.',
    group: 'Life Stages',
    forWhom: ['Behavioural concerns', 'Learning difficulty', 'School refusal', 'Emotional regulation'],
  },
  {
    slug: 'adolescent-counselling',
    title: 'Adolescent Counselling',
    blurb: 'A room where a teenager is the client, not the subject of a complaint.',
    detail:
      'Confidential work with adolescents on identity, academic pressure, friendship and family conflict, with clearly-explained limits on what is and is not shared with parents.',
    group: 'Life Stages',
    forWhom: ['Exam pressure', 'Self-esteem', 'Social difficulty', 'Screen and sleep habits'],
  },
  {
    slug: 'career-and-direction',
    title: 'Career & Direction Guidance',
    blurb: 'For the question that sounds practical but rarely is.',
    detail:
      'Aptitude and interest profiling combined with reflective conversation about what a person actually wants from work, used to narrow options rather than hand down an answer.',
    group: 'Life Stages',
    forWhom: ['Students', 'Career change', 'Course selection', 'Purpose and drift'],
  },
  {
    slug: 'astro-psychology',
    title: 'Astro-Psychology Consultation',
    blurb: 'A symbolic language for meaning-making, offered alongside clinical care.',
    detail:
      'A reflective consultation drawing on astrological and numerological symbolism as a prompt for self-examination. It is offered as a complement to psychological care, never as a substitute for it, and never as prediction or diagnosis.',
    group: 'Reflective Practice',
    forWhom: ['Meaning-making', 'Life-pattern reflection', 'Personal insight', 'Self-examination'],
  },
  {
    slug: 'mindfulness-and-wellbeing',
    title: 'Mindfulness & Wellbeing',
    blurb: 'Attention training for people who cannot sit still — yet.',
    detail:
      'Short guided practice in breath, body scan and attentional anchoring, taught as a skill to be rehearsed rather than a mood to be achieved. Frequently used to support anxiety and sleep work.',
    group: 'Reflective Practice',
    forWhom: ['Sleep difficulty', 'Restlessness', 'Burnout', 'Emotional reactivity'],
  },
]

export const SERVICE_GROUPS = [
  'Therapy & Counselling',
  'Assessment',
  'Life Stages',
  'Reflective Practice',
] as const

/* -------------------------------------------------------------------------- */

export const JOURNEY_STEPS = [
  {
    num: '01',
    title: 'Reach out',
    body: 'Call or message either clinic number. Tell us in a sentence or two what has brought you here — that is genuinely enough to start.',
  },
  {
    num: '02',
    title: 'Confirm a time',
    body: 'We agree a slot and confirm it in writing. Please arrive fifteen minutes early on your first visit so onboarding does not eat into the session.',
  },
  {
    num: '03',
    title: 'The first session',
    body: 'An unhurried conversation about the concern, its history and what you are hoping for. Nothing is decided for you in this hour.',
  },
  {
    num: '04',
    title: 'A plan you agreed to',
    body: 'You leave with a shared understanding of what happens next: how often, with whom, and what would tell us it is working.',
  },
] as const

/* -------------------------------------------------------------------------- *
   The people at LIGHTHOUSE.

   Photographs are the client's own. Names and titles are NOT yet published —
   fill in `name` and `role` below and the cards pick them up automatically.
   Nothing here is invented: an empty string renders as "to be confirmed"
   rather than a placeholder we made up.
 * -------------------------------------------------------------------------- */

export type TeamMember = {
  id: string
  /** Leave blank until the client confirms the spelling. */
  name: string
  /** Leave blank until the client confirms the title and qualifications. */
  role: string
  photo: string
}

export const TEAM: TeamMember[] = [
  { id: 'member-1', name: '', role: '', photo: 'member-1' },
  { id: 'member-2', name: '', role: '', photo: 'member-2' },
  { id: 'member-3', name: '', role: '', photo: 'member-3' },
  { id: 'member-4', name: '', role: '', photo: 'member-4' },
  { id: 'member-5', name: '', role: '', photo: 'member-5' },
  { id: 'member-6', name: '', role: '', photo: 'member-6' },
  { id: 'member-7', name: '', role: '', photo: 'member-7' },
]

/* -------------------------------------------------------------------------- *
   What the team covers. These are disciplines, not people — safe to publish
   before individual credentials are verified.
 * -------------------------------------------------------------------------- */

export type Discipline = {
  id: string
  role: string
  focus: string
  body: string
  specialties: string[]
}

export const DISCIPLINES: Discipline[] = [
  {
    id: 'clinical-direction',
    role: 'Clinical direction',
    focus: 'Founding practice & Astro-Psychology',
    body: 'Sets the guiding idea LIGHTHOUSE was founded on in 2018: psychology remains the professional foundation, while symbolic traditions may sit alongside it as a language for reflection.',
    specialties: ['Clinical supervision', 'Astro-Psychology', 'Numerology', 'Adult counselling'],
  },
  {
    id: 'assessment',
    role: 'Assessment & adult therapy',
    focus: 'Neuropsychology and psychometrics',
    body: 'Carries the neuropsychological and psychometric testing at the clinic, alongside a caseload of adult therapy across mood and anxiety presentations.',
    specialties: ['Neuropsychological assessment', 'CBT', 'Mood disorders', 'Psychometrics'],
  },
  {
    id: 'relational',
    role: 'Couples, family & adolescents',
    focus: 'Relational and systemic work',
    body: 'Works with couples, families and adolescents, with a particular interest in how conflict becomes organised across generations within a household.',
    specialties: ['Couples therapy', 'Family systems', 'Adolescent work', 'Grief'],
  },
  {
    id: 'child',
    role: 'Child psychology',
    focus: 'Early years & school liaison',
    body: 'Assesses and supports younger children through play-based, developmentally-appropriate methods, and liaises with schools where families ask for it.',
    specialties: ['Child assessment', 'Play-based therapy', 'Learning difficulty', 'Parent guidance'],
  },
]

/* -------------------------------------------------------------------------- *
   TODO(client): swap for real, consented testimonials. Initials only until then.
 * -------------------------------------------------------------------------- */

export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'I came in expecting to be told what was wrong with me. Instead I was asked what I thought was happening, and it was the first time anyone had.',
    attribution: 'Adult counselling',
    initials: 'S.',
  },
  {
    id: 't2',
    quote:
      'We had the same argument for four years. It took six sessions to see that we were both defending the same thing from opposite sides.',
    attribution: 'Couples counselling',
    initials: 'A. & R.',
  },
  {
    id: 't3',
    quote:
      'The assessment report was the first document about my son that a school actually acted on. It was written in language we could all read.',
    attribution: 'Parent, child assessment',
    initials: 'M.',
  },
  {
    id: 't4',
    quote:
      'What I valued most was that nothing was promised. I was helped to see the situation clearly and left to make my own decision.',
    attribution: 'Astro-Psychology consultation',
    initials: 'D.',
  },
] as const

/* -------------------------------------------------------------------------- */

export const FAQS = [
  {
    q: 'Do I need a referral to book?',
    a: 'No. You can contact the clinic directly on either number and we will arrange a first appointment. If a medical referral becomes appropriate, we will say so.',
  },
  {
    q: 'How long is a session?',
    a: 'A standard consultation runs for roughly an hour. Assessment appointments are longer and are scheduled separately. Please arrive fifteen minutes before your first appointment for onboarding.',
  },
  {
    q: 'Is what I say confidential?',
    a: 'Yes. What is discussed stays within the clinical team, with the ordinary legal and safety exceptions that apply to all mental-health practice — principally a serious risk of harm.',
  },
  {
    q: 'Is Astro-Psychology a replacement for therapy?',
    a: 'No, and we would not offer it as one. Psychology is the professional foundation of everything we do. Astrology and numerology are offered only as an additional symbolic frame for reflection, alongside — never instead of — appropriate psychological or medical care.',
  },
  {
    q: 'Do you see children and teenagers?',
    a: 'Yes. We work across the age range, with methods matched to developmental stage and with parents involved in a way that is explained clearly at the outset.',
  },
  {
    q: 'What should I bring to a first appointment?',
    a: 'Any previous reports, prescriptions or assessments if you have them, and nothing at all if you do not. A rough sense of what has been difficult is a sufficient starting point.',
  },
] as const
