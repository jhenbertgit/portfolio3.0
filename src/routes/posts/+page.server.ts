import { posts, tags } from '$lib/posts';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	if (!posts) error(404, 'Not Found');

	return {
		posts,
		tags
	};
}) satisfies PageServerLoad;
