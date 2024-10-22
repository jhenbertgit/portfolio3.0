import { projects } from '$lib/projects';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;
	const project = projects.find((project) => slug === project.slug);

	if (!projects || !project) error(404, 'Not Found');
	return { project };
}) satisfies PageServerLoad;
