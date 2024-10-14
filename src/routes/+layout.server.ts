import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;
	return { pathname };
}) satisfies LayoutServerLoad;
