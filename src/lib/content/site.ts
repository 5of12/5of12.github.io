export type AccentTone = 'coral' | 'orange' | 'yellow' | 'green' | 'teal';
export type IconName = 'spark' | 'compass' | 'midi' | 'heart' | 'play' | 'hand' | 'globe';

export type WorkItem = {
	title: string;
	eyebrow: string;
	description: string;
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

export const siteMeta = {
	title: '5of12',
	description:
		'We are 5of12. We make playful, thoughtful things that live between music, design, experimentation and invention.'
};

export const featuredWork: WorkItem[] = [
	{
		title: 'Playtonik',
		eyebrow: 'iOS musical instrument',
		description: 'A playful musical fidget toy for iPhone and iPad with physics, haptics and deep MIDI connectivity.',
		links: [
			{ label: 'Visit 5of12.co.uk', href: 'https://5of12.co.uk/#playtonik' },
			{ label: 'App Store', href: 'https://apps.apple.com/gb/app/playtonik/id6738356927' }
		],
		metrics: ['2025 MIDI Innovation Award', 'Physics-driven sound', 'MIDI in and out'],
		accent: 'coral'
	},
	{
		title: 'MediaPipe Playground',
		eyebrow: 'Browser interaction prototype',
		description: 'Gesture-led browser experiments exploring comfortable hand and body control with nothing more than a webcam.',
		links: [
			{ label: 'Open playground', href: 'https://5of12.github.io/MediaPipe-Playground' },
			{
				label: 'Try an example',
				href: 'https://5of12.github.io/MediaPipe-Playground/examples/WorldInYourHands.html'
			}
		],
		metrics: ['Web camera only', 'Single and two-hand input', 'Real-time interaction'],
		accent: 'yellow'
	},
	{
		title: 'Cacophony',
		eyebrow: 'Gesture system for Unity',
		description: 'A Unity gesture library built to make screen-based spatial interaction readable, reliable and fun.',
		links: [
			{ label: 'Read the article', href: '/journal/a-cacophony-of-gestures/' },
			{ label: 'GitHub', href: 'https://github.com/5of12/cacophony' }
		],
		metrics: ['Unity-first workflow', 'Platform-agnostic gestures', 'Action and reaction'],
		accent: 'teal'
	}
];

export const experiments: ExperimentItem[] = [
	{
		title: 'Pocket Operations',
		description: 'Sketch patterns, send them to hardware over Web MIDI and export loops as .midi files.',
		image: '/assets/experiments/pocket-operations-preview.png',
		imageAlt: 'Pocket Operations screenshot showing pattern categories, transport controls and a grid sequencer.',
		href: 'https://5of12.github.io/PocketOperations/',
		github: 'https://github.com/5of12/PocketOperations',
		accent: 'orange'
	},
	{
		title: 'MIDIWeb-Hub',
		description: 'A curated directory of browser-based musical tools, utilities and WebMIDI experiments.',
		image: '/assets/experiments/midiweb-hub-preview.png',
		imageAlt: 'MIDIWeb-Hub screenshot showing tagged cards in a WebMIDI directory.',
		href: 'https://5of12.github.io/MIDIWeb-Hub/',
		github: 'https://github.com/5of12/MIDIWeb-Hub',
		accent: 'green'
	},
	{
		title: 'Augment',
		description: 'An Audio UX generator for polished clicks, pops and small expressive cues built in the browser.',
		image: '/assets/experiments/augment-preview.png',
		imageAlt: 'Augment screenshot showing interface sound controls, waveform preview and export button.',
		href: 'https://5of12.github.io/Augment/',
		github: 'https://github.com/5of12/Augment',
		accent: 'teal'
	}
];

export const studioPrinciples: PrincipleItem[] = [
	{
		title: 'Human',
		description: 'Designed with care, taste and feeling.',
		accent: 'coral',
		icon: 'heart'
	},
	{
		title: 'Playful',
		description: 'Inviting experimentation and surprise.',
		accent: 'yellow',
		icon: 'play'
	},
	{
		title: 'Useful',
		description: 'Built to be touched, heard and explored.',
		accent: 'green',
		icon: 'hand'
	},
	{
		title: 'Curious',
		description: 'Unafraid of odd ideas and unexpected turns.',
		accent: 'teal',
		icon: 'compass'
	}
];

export const studioStats: StatItem[] = [
	{ label: 'Combined experience', value: '15+ years', icon: 'spark' },
	{ label: 'Core disciplines', value: 'Spatial, audio, interaction', icon: 'midi' },
	{ label: 'Studio base', value: 'UK studio', icon: 'globe' }
];

export const studioBeliefs: BeliefItem[] = [
	{ title: 'Play as a serious tool', accent: 'coral', icon: 'play' },
	{ title: 'Bleeps, Bloops, Spline & Springs', accent: 'orange', icon: 'spark' },
	{ title: 'Discovery as a way of working', accent: 'yellow', icon: 'compass' },
	{ title: 'Human-made design, no AI slop', accent: 'green', icon: 'heart' },
	{ title: 'Supporting MIDI wherever possible.', accent: 'teal', icon: 'midi' }
];
