import type { PageServerLoad } from './$types';
import { posts, tags } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	if (!posts) error(404, 'Not Found');

	return {
		posts,
		tags
	};
}) satisfies PageServerLoad;
