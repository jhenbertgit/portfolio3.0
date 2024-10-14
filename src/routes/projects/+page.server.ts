import type { PageServerLoad } from './$types';
import { projects, tags } from '$lib/projects';
import { error } from '@sveltejs/kit';

export const ssr = false;

export const load = (async () => {
	if (!projects) error(404, 'Not Found');

	return { projects, tags };
}) satisfies PageServerLoad;
