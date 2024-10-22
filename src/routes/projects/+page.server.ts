import { projects, tags } from '$lib/projects';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	if (!projects) error(404, 'Not Found');

	return { projects, tags };
}) satisfies PageServerLoad;
