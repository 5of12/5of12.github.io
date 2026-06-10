export type AccentTone = "coral" | "orange" | "yellow" | "green" | "teal";
export type IconName =
  | "spark"
  | "compass"
  | "midi"
  | "heart"
  | "play"
  | "hand"
  | "xr"
  | "globe"
  | "game"
  | "immersive";

export type WorkPreview = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
};

export type WorkItem = {
  title: string;
  eyebrow: string;
  description: string;
  preview: WorkPreview;
  links: Array<{ label: string; href: string }>;
  metrics: string[];
  accent: AccentTone;
};

export type ExperimentItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  github: string;
  accent: AccentTone;
};

export type PrincipleItem = {
  title: string;
  description: string;
  accent: AccentTone;
  icon: IconName;
};

export type StatItem = {
  label: string;
  value: string;
  icon: IconName;
};

export type BeliefItem = {
  title: string;
  accent: AccentTone;
  icon: IconName;
};

export type ServiceItem = {
  title: string;
  description: string;
  accent: AccentTone;
  icon: IconName;
};

export type PartnerItem = {
  name: string;
  href: string;
  logo?: string;
  logoClass: string;
  wordmark?: string;
  secondaryMark?: string;
};

export type TechnologyItem = {
  name: string;
  description: string;
  href: string;
  logo?: string;
  logoClass: string;
  wordmark?: string;
};

export type TeamPortfolio = {
  name: string;
  fullName: string;
  href: string;
};

export type PlayExperience = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  linkLabel: string;
  accent: AccentTone;
  icon: IconName;
};

export type SocialIconName = "instagram" | "linkedin" | "youtube" | "github";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: SocialIconName;
};

export type ContactRoute = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const siteMeta = {
  title: "5of12",
  description:
    "5of12 is a UK creative technology studio building playful spatial, musical and web-first experiences.",
};

export const featuredWork: WorkItem[] = [
  {
    title: "Playtonik",
    eyebrow: "iOS musical instrument",
    description:
      "A playful musical fidget toy for iPhone and iPad with physics, haptics and deep MIDI connectivity.",
    preview: {
      type: "image",
      src: "/assets/ADC_banner.png",
      alt: "Playtonik physics shapes bouncing inside glowing musical containers.",
    },
    links: [
      { label: "Explore Playtonik", href: "/playtonik/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/gb/app/playtonik/id6738356927",
      },
    ],
    metrics: [
      "2025 MIDI Innovation Award",
      "Physics-driven sound",
      "MIDI in and out",
    ],
    accent: "coral",
  },
  {
    title: "MediaPipe Playground",
    eyebrow: "Browser interaction prototype",
    description:
      "Gesture-led browser experiments exploring comfortable hand and body control with nothing more than a webcam.",
    preview: {
      type: "image",
      src: "/assets/work/mediapipe-map.gif",
      alt: "MediaPipe Playground map interaction controlled by two handed pinch gestures.",
    },
    links: [
      {
        label: "Open playground",
        href: "https://5of12.github.io/MediaPipe-Playground",
      },
      {
        label: "Try an example",
        href: "https://5of12.github.io/MediaPipe-Playground/examples/WorldInYourHands.html",
      },
    ],
    metrics: [
      "Web camera only",
      "Single and two-hand input",
      "Real-time interaction",
    ],
    accent: "yellow",
  },
  {
    title: "Cacophony",
    eyebrow: "Gesture system for Unity",
    description:
      "A Unity gesture library built to make screen-based spatial interaction readable, reliable and fun.",
    preview: {
      type: "image",
      src: "/assets/Cacophony_banner.png",
      alt: "Cacophony gesture library banner with a hand performing a pinch gesture.",
    },
    links: [
      { label: "Read the article", href: "/journal/a-cacophony-of-gestures/" },
      { label: "GitHub", href: "https://github.com/5of12/cacophony" },
    ],
    metrics: [
      "Unity-first workflow",
      "Platform-agnostic gestures",
      "Action and reaction",
    ],
    accent: "teal",
  },
];

export const experiments: ExperimentItem[] = [
  {
    title: "Pocket Operations",
    description:
      "Sketch patterns, send them to hardware over Web MIDI and export loops as .midi files.",
    image: "/assets/experiments/pocket-operations-preview.png",
    imageAlt:
      "Pocket Operations screenshot showing pattern categories, transport controls and a grid sequencer.",
    href: "https://5of12.github.io/PocketOperations/",
    github: "https://github.com/5of12/PocketOperations",
    accent: "orange",
  },
  {
    title: "MIDIWeb-Hub",
    description:
      "A curated directory of browser-based musical tools, utilities and WebMIDI experiments.",
    image: "/assets/experiments/midiweb-hub-preview.png",
    imageAlt:
      "MIDIWeb-Hub screenshot showing tagged cards in a WebMIDI directory.",
    href: "https://5of12.github.io/MIDIWeb-Hub/",
    github: "https://github.com/5of12/MIDIWeb-Hub",
    accent: "green",
  },
  {
    title: "Augment",
    description:
      "An Audio UX generator for polished clicks, pops and small expressive cues built in the browser.",
    image: "/assets/experiments/augment-preview.png",
    imageAlt:
      "Augment screenshot showing interface sound controls, waveform preview and export button.",
    href: "https://5of12.github.io/Augment/",
    github: "https://github.com/5of12/Augment",
    accent: "teal",
  },
];

export const studioPrinciples: PrincipleItem[] = [
  {
    title: "Human",
    description: "Designed with care, taste and feeling.",
    accent: "coral",
    icon: "heart",
  },
  {
    title: "Playful",
    description: "Inviting experimentation and surprise.",
    accent: "yellow",
    icon: "play",
  },
  {
    title: "Useful",
    description: "Built to be touched, heard and explored.",
    accent: "green",
    icon: "hand",
  },
  {
    title: "Curious",
    description: "Unafraid of odd ideas and unexpected turns.",
    accent: "teal",
    icon: "compass",
  },
];

export const studioStats: StatItem[] = [
  { label: "Combined experience", value: "15+ years", icon: "spark" },
  {
    label: "Core disciplines",
    value: "Spatial, audio, interaction",
    icon: "midi",
  },
  { label: "Studio base", value: "UK studio", icon: "globe" },
];

export const studioBeliefs: BeliefItem[] = [
  { title: "Play as a serious tool", accent: "coral", icon: "play" },
  {
    title: "Bleeps, Bloops, Springs & Splines",
    accent: "orange",
    icon: "spark",
  },
  { title: "Discovery as a way of working", accent: "yellow", icon: "compass" },
  { title: "Human-made design, no AI slop", accent: "green", icon: "heart" },
  { title: "Add MIDI wherever possible.", accent: "teal", icon: "midi" },
];

export const playExperiences: PlayExperience[] = [
  {
    title: "Playtonik",
    eyebrow: "Musical fidget toy",
    description:
      "A tactile iPhone and iPad instrument where physics, haptics and MIDI turn little gestures into musical motion.",
    href: "/playtonik/",
    linkLabel: "Explore Playtonik",
    accent: "coral",
    icon: "midi",
  },
  {
    title: "Pezzi",
    eyebrow: "WebXR game for VIVERSE",
    description:
      "Music in pieces: a cross-platform XR, desktop and mobile game built around playful listening and assembly.",
    href: "https://www.viverse.com/dPASDhP",
    linkLabel: "Play on VIVERSE",
    accent: "yellow",
    icon: "xr",
  },
  {
    title: "Unity experiments",
    eyebrow: "Games, hackathons and instruments",
    description:
      "Rapid prototypes from Meta Hackathon work to Unity games and musical instrument experiments, made to test how interaction feels.",
    href: "https://www.youtube.com/watch?v=gIsR3yy8NuY",
    linkLabel: "Watch hackathon work",
    accent: "teal",
    icon: "game",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Rapid prototypes",
    description:
      "Early technical proofs, design prototypes and show-ready demos for ideas that need to be felt before they can be judged.",
    accent: "coral",
    icon: "spark",
  },
  {
    title: "Spatial computing",
    description:
      "XR, AR and mobile apps using hand tracking, gaze, haptics, scene understanding and spatial UX.",
    accent: "yellow",
    icon: "globe",
  },
  {
    title: "Novel interaction systems",
    description:
      "Gesture vocabularies, mid-air UI, touchless controls and multi-modal input systems for screens and spaces.",
    accent: "teal",
    icon: "hand",
  },
  {
    title: "Immersive demos",
    description:
      "Event, exhibition and executive demos that make technical value clear, robust and memorable.",
    accent: "orange",
    icon: "immersive",
  },
  {
    title: "XR app development",
    description:
      "RealityKit, ARKit and Unity builds from concept through implementation, polish and release.",
    accent: "green",
    icon: "compass",
  },
  {
    title: "Tools, plugins and SDKs",
    description:
      "Audio plugins, Unity utilities, browser tools and developer SDKs that turn prototypes into reusable systems.",
    accent: "teal",
    icon: "midi",
  },
];

export const partners: PartnerItem[] = [
  {
    name: "Watershed",
    href: "https://www.watershed.co.uk",
    logo: "/assets/partners/watershed.webp",
    logoClass: "watershed",
    wordmark: "Watershed",
  },
  {
    name: "Pervasive Media Studio",
    href: "https://www.watershed.co.uk/studio/",
    logo: "/assets/partners/pervasive-media-studio.svg",
    logoClass: "pervasive",
  },
  {
    name: "Uno Minda",
    href: "https://www.unominda.com",
    logo: "/assets/partners/uno-minda.png",
    logoClass: "uno-minda",
  },
  {
    name: "Distance",
    href: "https://distance.tech",
    logo: "/assets/partners/distance.svg",
    logoClass: "distance",
  },
  {
    name: "Ultraleap + ROLI",
    href: "https://www.ultraleap.com",
    logo: "/assets/partners/ultraleap.svg",
    logoClass: "ultraleap",
    secondaryMark: "ROLI",
  },
  {
    name: "50Hertz",
    href: "https://www.50hertz.com/en/Company",
    logo: "/assets/partners/50hertz.png",
    logoClass: "50hertz",
  },
  {
    name: "SRT Marine",
    href: "https://srt-marine.com",
    logo: "/assets/partners/srt.svg",
    logoClass: "SRT",
  },
  {
    name: "HTC VIVERSE",
    href: "https://www.viverse.com",
    logo: "/assets/partners/viverse.png",
    logoClass: "viverse",
    wordmark: "VIVERSE",
  },
];

export const technologies: TechnologyItem[] = [
  {
    name: "Apple",
    description:
      "Cross-platform App Store development for iPhone, iPad, Mac and Apple Vision Pro.",
    href: "https://developer.apple.com/",
    logo: "/assets/technologies/apple.svg",
    logoClass: "apple",
  },
  {
    name: "Meta",
    description:
      "Quest 3 and Quest 3S development for spatial apps and experiences.",
    href: "https://developers.meta.com/horizon/",
    logo: "/assets/technologies/meta.svg",
    logoClass: "meta",
  },
  {
    name: "Unity",
    description:
      "Cross-platform games, rapid prototypes and reusable creative tooling.",
    href: "https://unity.com/",
    logo: "/assets/technologies/unity.svg",
    logoClass: "unity",
  },
  {
    name: "Threlte",
    description: "Svelte-native 3D and WebXR experiences for the browser.",
    href: "https://threlte.xyz/",
    logoClass: "threlte",
    wordmark: "Threlte",
  },
  {
    name: "Svelte",
    description:
      "Fast, accessible websites and focused interactive interfaces.",
    href: "https://svelte.dev/",
    logo: "/assets/technologies/svelte.svg",
    logoClass: "svelte",
  },
];

export const teamPortfolios: TeamPortfolio[] = [
  {
    name: "Pete",
    fullName: "Pete Nancollis",
    href: "https://petenancollis.framer.website",
  },
  {
    name: "Tom",
    fullName: "Tom Cartwright",
    href: "https://tom-cartwright.com",
  },
  {
    name: "Ant",
    fullName: "Ant Nasce",
    href: "https://antiero.github.io/ant-portfolio/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@5of12studio",
    href: "https://instagram.com/5of12studio",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    handle: "5of12",
    href: "https://www.linkedin.com/company/5of12",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    handle: "@5of12studio",
    href: "https://www.youtube.com/@5of12studio",
    icon: "youtube",
  },
  {
    label: "GitHub",
    handle: "5of12",
    href: "https://github.com/5of12",
    icon: "github",
  },
];

export const contactRoutes: ContactRoute[] = [
  {
    title: "Studio enquiries",
    description:
      "Immersive builds, prototypes, spatial interaction, events and research demos.",
    href: "mailto:info@5of12.co.uk?subject=Studio%20enquiry",
    label: "Start a project",
  },
  {
    title: "Playtonik support",
    description:
      "App support, MIDI setup questions, feature feedback and privacy questions.",
    href: "mailto:info@5of12.co.uk?subject=Playtonik%20support",
    label: "Contact support",
  },
  {
    title: "Open source",
    description:
      "Cacophony, MediaPipe Playground and browser-based music tools.",
    href: "https://github.com/5of12",
    label: "View GitHub",
  },
];

export const companyInfo = {
  name: "5of12 LLP",
  registration: "Limited Liability Partnership",
  companyNumber: "OC453996",
  email: "info@5of12.co.uk",
  privacyHref: "https://5of12.co.uk/#privacy-policy",
};
