// Place files you want to import through the `$lib` alias in this folder.

import { basename, dirname } from 'path';

// Helper function for date formatting
const formatDate = (dateStr: string): string => {
	return new Date(dateStr).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
};

// Helper function to process a post markdown file
export const processPostMarkdownFile = async (filepath: string, module: () => Promise<unknown>) => {
	const slug = basename(dirname(filepath));
	const file = (await module()) as PostMarkdownFile;
	const body = file.default.render().html;
	const metadata = file.metadata;

	const post: Post = {
		slug,
		body,
		tags: metadata.tags ?? [],
		date: formatDate(metadata.date),
		title: metadata.title ?? 'Untitled Post',
		description: metadata.description ?? ''
	};

	return post;
};

// Helper function to process a project markdown file
export const processProjectMarkdownFile = async (
	filepath: string,
	module: () => Promise<unknown>
) => {
	const slug = basename(dirname(filepath));
	const file = (await module()) as ProjectMarkdownFile;
	const body = file.default.render().html;
	const metadata = file.metadata;

	const project: Project = {
		slug,
		body,
		tags: metadata.tags ?? [],
		date: formatDate(metadata.date),
		image: metadata.image ?? '',
		title: metadata.title ?? 'Untitled Project',
		liveURL: metadata.liveURL ?? '',
		githubURL: metadata.githubURL ?? '',
		description: metadata.description ?? ''
	};

	return project;
};
