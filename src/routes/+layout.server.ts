import type { LayoutServerLoad } from './$types';

export const ssr = false;

export const load = (async ({ url }) => {
	const { pathname } = url;

	const metaDefault = {
		title: "Jhenbert's Portfolio Website: Freelance Full Stack Web Developer",
		description:
			'Freelance full-stack developer with 2 years of experience working on personal projects. Proficient in Svelte/SvelteKit, TypeScript, Prisma, and MySQL/PostgreSQL. Skilled in building and managing scalable web applications across the development stack.',
		image: 'https://avatars.githubusercontent.com/u/81309377?v=4'
	};

	const meta = {
		title: metaDefault.title,
		description: metaDefault.description,
		image: metaDefault.image,

		//Twitter
		twitter: {
			title: metaDefault.title,
			description: metaDefault.description,
			image: metaDefault.image
		}
	};
	return { pathname, meta };
}) satisfies LayoutServerLoad;
