import type { PageServerLoad } from './$types';
import { posts } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const { slug } = params;
	const post = posts.find((post) => slug === post.slug);

	if (!posts || !post) error(404, 'Not Found');

	return {
		post
	};
}) satisfies PageServerLoad;
