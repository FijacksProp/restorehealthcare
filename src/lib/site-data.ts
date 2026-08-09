import {
  Accessibility,
  Baby,
  BedDouble,
  BriefcaseMedical,
  HandHeart,
  HeartHandshake,
  Home,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export const organisation = {
  name: "Restore Healthcare Solutions Limited",
  shortName: "Restore Healthcare",
  address: "53 Phibblestown Wood, Dublin 15, D15 R5DE, Ireland",
  area: "Dublin 15 and surrounding communities",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  intro: string;
  icon: LucideIcon;
  accent: string;
  features: { title: string; text: string }[];
  suitableFor: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "disability-support",
    title: "Disability Support Services",
    shortTitle: "Disability Support",
    eyebrow: "Choice-led support",
    summary:
      "Flexible, person-centred support for children, adults and older people—shaped around individual goals, routines and abilities.",
    intro:
      "Our approach begins with the person, not a diagnosis. We listen to what matters, understand existing strengths and agree practical support that protects dignity while creating more choice in everyday life.",
    icon: Accessibility,
    accent: "mint",
    features: [
      { title: "Daily living support", text: "Respectful assistance with personal routines, meals, mobility and household activities, based on individual preference." },
      { title: "Community participation", text: "Support to attend appointments, activities, education, volunteering and the social occasions that make life feel connected." },
      { title: "Skills and independence", text: "Encouragement to build confidence, practise everyday skills and work towards meaningful personal goals at a comfortable pace." },
      { title: "Family partnership", text: "Clear communication and coordinated support that recognises the knowledge, routines and wellbeing of the whole family." },
    ],
    suitableFor: [
      "People with physical or mobility-related disabilities",
      "People with intellectual disabilities or autism",
      "People with sensory or communication support needs",
      "Children and families seeking practical home or community support",
      "Adults building confidence and independent-living skills",
      "Older people living with an acquired or long-term disability",
    ],
    process: ["Listen to your priorities", "Agree a tailored support plan", "Match the right support team", "Review as life and goals change"],
    faq: [
      { question: "Is support based on a standard package?", answer: "No. Support is planned around each person’s routines, preferences, communication style and goals. The final arrangement is agreed after an initial conversation and assessment." },
      { question: "Can family members be involved?", answer: "Yes. With the person’s agreement, we work collaboratively with parents, guardians, family members and other relevant people in their support network." },
      { question: "Do you support all ages?", answer: "Restore is developing services for children, adults and older people. The suitability of every request is considered individually so that support remains safe and appropriate." },
    ],
  },
  {
    slug: "home-care",
    title: "Home Care & Personal Support",
    shortTitle: "Home Care",
    eyebrow: "Support where life happens",
    summary: "Thoughtful help with everyday routines, designed to make living at home feel safer, easier and more independent.",
    intro: "Home is personal. Our support fits around the way each person already lives, offering the right level of practical help without taking over the moments they can and want to manage themselves.",
    icon: Home,
    accent: "gold",
    features: [
      { title: "Personal routines", text: "Discreet assistance with washing, dressing, grooming and other agreed aspects of personal care." },
      { title: "Meals and wellbeing", text: "Support with meal preparation, hydration and routines that contribute to a comfortable day." },
      { title: "Mobility at home", text: "Practical assistance with moving safely around the home and maintaining familiar daily activities." },
      { title: "Flexible visits", text: "Planned support ranging from shorter visits to extended or round-the-clock arrangements, subject to assessment." },
    ],
    suitableFor: ["Older people who wish to remain at home", "Adults recovering confidence after a change in circumstances", "People who need help with selected daily routines", "Families seeking dependable, planned support"],
    process: ["Understand life at home", "Identify the right level of help", "Plan consistent visits", "Keep support responsive"],
    faq: [
      { question: "Can support change over time?", answer: "Yes. Care arrangements should respond to real life. Reviews help us adjust timing, priorities and the level of support as needs evolve." },
      { question: "Is 24-hour support available?", answer: "Planned day, night or 24-hour support may be arranged where the service is suitable and staffing is available. This is not an emergency response service." },
    ],
  },
  {
    slug: "children-family-support",
    title: "Children & Family Support",
    shortTitle: "Children & Families",
    eyebrow: "Support that includes the family",
    summary: "Consistent, age-appropriate help that supports a child’s routines, participation and family life.",
    intro: "Every child and family has a different rhythm. We work with parents and guardians to understand what a good day looks like, then shape practical, respectful support around it.",
    icon: Baby,
    accent: "coral",
    features: [
      { title: "Home routines", text: "Support with agreed daily routines, communication, play and age-appropriate independence." },
      { title: "Participation", text: "Help to take part in community activities, social opportunities and everyday family experiences." },
      { title: "Parent and guardian partnership", text: "A collaborative approach that values family knowledge and maintains clear boundaries and communication." },
      { title: "Short-break support", text: "Planned support that gives parents or guardians time to rest, attend appointments or focus on other family needs." },
    ],
    suitableFor: ["Children who need additional practical support", "Young people developing daily-living confidence", "Families seeking planned short breaks", "Parents and guardians who value consistent communication"],
    process: ["Meet the family", "Learn the child’s routines", "Agree boundaries and goals", "Review together"],
    faq: [
      { question: "Will parents or guardians shape the plan?", answer: "Yes. Support for a child is developed collaboratively, with the appropriate consent and with the child’s voice included in an age-appropriate way." },
      { question: "Is this a clinical service?", answer: "The website currently describes practical, non-clinical support. Any specialist or clinical requirement would need to be discussed and confirmed before a service is agreed." },
    ],
  },
  {
    slug: "older-person-support",
    title: "Older Person Support",
    shortTitle: "Older People",
    eyebrow: "Independence with reassurance",
    summary: "Reliable support that helps older people retain familiar routines, relationships and control in their own homes.",
    intro: "A little well-timed support can make a meaningful difference. We focus on what a person can do, what they enjoy and what will help them feel secure without losing independence.",
    icon: HandHeart,
    accent: "lavender",
    features: [
      { title: "Everyday assistance", text: "Practical help with agreed routines, meals, light household tasks and getting ready for the day." },
      { title: "Companionship", text: "Time for conversation, shared interests and the reassuring presence of a familiar support person." },
      { title: "Appointments and outings", text: "Support to attend appointments, shop locally and remain connected with the community." },
      { title: "Family reassurance", text: "Dependable communication that helps families understand how agreed support is progressing." },
    ],
    suitableFor: ["Older people living independently", "People who would benefit from companionship", "Families balancing caring responsibilities", "People needing support after a change in mobility or routine"],
    process: ["Understand what matters", "Plan around existing routines", "Introduce consistent support", "Adjust when needed"],
    faq: [
      { question: "Does support mean giving up independence?", answer: "No. Our aim is to protect independence by providing help only where it adds safety, comfort or confidence." },
      { question: "Can visits include companionship?", answer: "Yes. Meaningful conversation, shared activities and community connection can be central parts of an agreed support plan." },
    ],
  },
  {
    slug: "respite-care",
    title: "Respite & Family Carer Support",
    shortTitle: "Respite Care",
    eyebrow: "Rest with peace of mind",
    summary: "Planned, reassuring support that gives family carers time to rest, reset or attend to other parts of life.",
    intro: "Taking a break is part of sustainable caring. Respite is planned carefully around the person’s familiar routines so that family carers can step away with greater confidence.",
    icon: BedDouble,
    accent: "blue",
    features: [
      { title: "Planned short breaks", text: "Support arranged for agreed periods, whether for a few hours, a day or a longer planned interval." },
      { title: "Familiar routines", text: "Continuity around meals, activities, communication and the details that help someone feel comfortable." },
      { title: "At-home reassurance", text: "Support in familiar surroundings, helping to reduce unnecessary disruption while a carer takes time away." },
      { title: "Flexible planning", text: "Arrangements shaped around family circumstances, the person’s preferences and available support capacity." },
    ],
    suitableFor: ["Parents and guardians", "Family members providing regular unpaid care", "People who prefer respite in familiar surroundings", "Families planning around work, rest or important commitments"],
    process: ["Discuss the break needed", "Document important routines", "Plan a calm handover", "Share a clear update"],
    faq: [
      { question: "Does respite have to be overnight?", answer: "No. Respite can be discussed for shorter daytime periods or longer planned support, depending on assessed needs and availability." },
      { question: "How much notice is required?", answer: "Planned notice gives the best opportunity to understand routines and arrange suitable support. Availability will be confirmed for every request." },
    ],
  },
  {
    slug: "community-companionship",
    title: "Community & Companionship Support",
    shortTitle: "Community Support",
    eyebrow: "Connection that feels natural",
    summary: "Practical, social support that helps people stay connected to interests, relationships and everyday community life.",
    intro: "Wellbeing is more than completing tasks. It is also being known, having somewhere to go and feeling part of the world outside the front door.",
    icon: Users,
    accent: "rose",
    features: [
      { title: "Meaningful companionship", text: "Conversation and shared activities guided by the person’s own interests and preferred pace." },
      { title: "Community access", text: "Support to attend local groups, places of worship, appointments, shops and social occasions." },
      { title: "Confidence building", text: "Encouragement to try new routines, reconnect with interests and make everyday decisions." },
      { title: "Practical errands", text: "Help with agreed shopping, appointments and other activities that keep daily life moving." },
    ],
    suitableFor: ["People experiencing isolation", "People rebuilding community confidence", "Adults who want support attending activities", "Older people seeking regular social connection"],
    process: ["Discover interests", "Choose meaningful activities", "Build a comfortable rhythm", "Keep goals personal"],
    faq: [
      { question: "Is companionship task-based?", answer: "Not necessarily. The purpose can simply be reliable social connection, conversation and time spent doing something the person enjoys." },
      { question: "Can support include appointments?", answer: "Yes, assistance with planned appointments and community activities can form part of an agreed support plan." },
    ],
  },
  {
    slug: "healthcare-staffing",
    title: "Healthcare Staffing Solutions",
    shortTitle: "Healthcare Staffing",
    eyebrow: "People who strengthen care teams",
    summary: "Responsive staffing support for healthcare and community organisations, shaped around the setting and role required.",
    intro: "Alongside individual support, Restore is developing staffing solutions for organisations that need dependable people to complement established teams and maintain continuity of care.",
    icon: BriefcaseMedical,
    accent: "navy",
    features: [
      { title: "Role-led matching", text: "A careful approach to understanding the setting, responsibilities, shift pattern and team culture." },
      { title: "Flexible cover", text: "Staffing conversations for planned cover, additional capacity and longer-term workforce requirements." },
      { title: "Clear coordination", text: "Straightforward communication before, during and after placements to support continuity." },
      { title: "Care-sector focus", text: "Support intended for relevant healthcare, disability, home-care and community settings." },
    ],
    suitableFor: ["Home-care providers", "Disability and community services", "Residential and supported-living settings", "Organisations planning additional care capacity"],
    process: ["Define the requirement", "Confirm role expectations", "Coordinate suitable personnel", "Review the arrangement"],
    faq: [
      { question: "Which roles can Restore supply?", answer: "Role availability and requirements will be confirmed directly with each organisation. We do not publish unverified role categories or credentials." },
      { question: "Can organisations discuss recurring cover?", answer: "Yes. Planned, recurring and longer-term requirements can be discussed alongside shorter-term staffing needs." },
    ],
  },
];

export const primaryServices = services.slice(0, 6);

export const articles = [
  {
    slug: "starting-a-care-conversation",
    category: "For families",
    title: "Starting a care conversation with respect",
    excerpt: "A practical way to discuss support while protecting the person’s voice, choices and sense of control.",
    readTime: "5 min read",
    sections: [
      { heading: "Begin with what matters", body: "A care conversation is more constructive when it starts with the person’s priorities rather than a list of perceived problems. Ask what they want to keep doing, what currently feels difficult and what kind of help would feel acceptable." },
      { heading: "Be specific and unhurried", body: "General statements can feel overwhelming. Talk about a real part of the day—preparing a meal, attending an appointment or having company—and allow time for the person to consider the idea." },
      { heading: "Keep choice visible", body: "Support should not automatically mean losing independence. Explain that a plan can begin with a small amount of help, be reviewed and change as the person’s preferences or circumstances change." },
    ],
  },
  {
    slug: "what-person-centred-support-means",
    category: "Disability support",
    title: "What person-centred support means in everyday life",
    excerpt: "Person-centred care is more than a phrase. It should be visible in routines, communication and everyday decisions.",
    readTime: "6 min read",
    sections: [
      { heading: "The person sets the direction", body: "Good support begins by understanding the person’s communication, interests, relationships and goals. Their preferences guide both the plan and the small decisions made throughout each day." },
      { heading: "Strengths remain central", body: "Support should build on what a person already does well. Assistance is offered where useful, without unnecessarily taking over tasks, decisions or experiences that the person can manage." },
      { heading: "Plans stay alive", body: "A person-centred plan is reviewed rather than filed away. Changes in confidence, health, family life or ambition should lead to thoughtful adjustments in the support provided." },
    ],
  },
  {
    slug: "planning-a-restorative-break",
    category: "Respite",
    title: "Planning a break when you are a family carer",
    excerpt: "Why planned respite matters and what helps make the handover calmer for everyone involved.",
    readTime: "4 min read",
    sections: [
      { heading: "Rest is part of caring", body: "Time away can help carers protect their health, relationships and capacity to continue providing support. A break does not diminish commitment; it helps make that commitment sustainable." },
      { heading: "Write down the familiar details", body: "A calm handover includes everyday information: preferred meals, communication cues, medication arrangements, favourite activities and what helps when a person feels unsettled." },
      { heading: "Start with a manageable plan", body: "For some families, a shorter first respite period makes it easier to build trust. The arrangement can be reviewed and expanded when everyone feels comfortable." },
    ],
  },
];

export const values = [
  { title: "Choice", text: "The person’s voice shapes their support, from everyday routines to longer-term goals.", icon: Sparkles },
  { title: "Dignity", text: "We approach personal moments with sensitivity, privacy and respect.", icon: HeartHandshake },
  { title: "Connection", text: "Support should strengthen relationships and belonging, not replace them.", icon: Users },
  { title: "Dependability", text: "Clear communication and thoughtful planning create confidence for everyone involved.", icon: HandHeart },
];
