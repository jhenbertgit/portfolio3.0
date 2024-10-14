export const heading: string = 'About';

export const subheading: string = 'Get to Know Me: My Skills and Experience';

export const image: string = '/images/about/photo.gif'; // relative to static/

export const paragraphs: Paragraphs = [
	"Hi, I'm Jhenbert, a full-stack freelance web developer with a keen eye for detail and a passion for solving complex problems through code. Since 2022, I've been helping clients bring their visions to life by creating responsive, user-friendly web applications that not only look great but also perform seamlessly.",

	"With a versatile skill set spanning front-end and back-end technologies, I enjoy building everything from interactive user interfaces to scalable server solutions. Whether it's working with Svelte, React, or Node.js, I'm always excited to tackle new challenges and contribute to meaningful projects. Beyond coding, I thrive on continuous learning and staying up-to-date with the latest tools and trends in web development.",

	"Let's create something amazing together!"
];

export const skills: Skills = [
	'Typescript',
	'Svelte',
	'SvelteKit',
	'Prisma ORM',
	'Javascript',
	'Tailwind',
	'Node JS',
	'React',
	'SQL',
	'CSS',
	'VSCode',
	'Git',
	'Github',
	'Figma',
	'Linux (Ubuntu)'
];

export const experience: Experience[] = [
	{
		company: 'Freelance',
		position: 'Full Stack Web Developer',
		timeframe: '2022-Current'
	},
	{
		company: 'National Government',
		position: 'Office Staff',
		timeframe: '2010-Current'
	},
	{
		company: 'Local Government',
		position: 'Administrative Aide',
		timeframe: '2008-2010'
	}
];

export const stack: Stack[] = [
	{
		name: 'Svelte/kit',
		href: 'https://kit.svelte.dev',
		hrefText: 'kit.svelte.dev',
		desc: 'Modern web framework for building fast, interactive apps.',
		image: 'svelte.svg'
	},
	{
		name: 'Typescript',
		href: 'https://typescriptlang.org',
		hrefText: 'typescriptlang.org',
		desc: 'A safer, statically typed superset of JavaScript, with types.',
		image: 'typescript.svg'
	},
	{
		name: 'Tailwind',
		href: 'https://tailwindcss.com',
		hrefText: 'tailwindcss.com',
		desc: 'Utility-first CSS framework for efficient and expressive styling.',
		image: 'tailwind.svg'
	},
	{
		name: 'MDsvex',
		href: 'https://mdsvex.pngwn.io',
		hrefText: 'mdsvex.pngwn.io',
		desc: 'Markdown syntax compiled into Svelte dynamic web components.',
		image: 'mdsvex.svg'
	},
	{
		name: 'Google AppScript',
		href: 'https://developers.google.com/apps-script/overview',
		hrefText: 'google.com',
		desc: 'Google Apps Script is a rapid application development platform.',
		image: 'appscript.png'
	},
	{
		name: 'Vercel',
		href: 'https://vercel.com',
		hrefText: 'vercel.com',
		desc: 'Your complete platform for the web. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.',
		image: 'vercel.svg'
	}
];

interface Experience {
	company: string;
	position: string;
	timeframe: string;
}

interface Stack {
	name: string;
	href: string;
	hrefText: string;
	desc: string;
	image: string;
}

type Skills = string[];

type Paragraphs = string[];
