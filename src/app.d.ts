// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type MetaDefault = { title: string; description: string; image: string };

	type Meta = MetaDefault & {
		twitter: MetaDefault;
	};

	interface Post {
		slug: string;
		body: string;
		date: string;
		tags: string[];
		title: string;
		description: string;
	}

	// Project interface extending the Post interface and adding unique fields
	interface Project extends Post {
		image: string;
		liveURL: string;
		githubURL: string;
	}

	// Base interface for common markdown metadata
	interface BaseMarkdownMetadata {
		date: string;
		tags: string[];
		title: string;
		description: string;
	}

	// Interface for the common structure of a markdown file
	interface MarkdownFile {
		default: {
			render: () => {
				html: string;
			};
		};
	}

	// Extend the base metadata for posts
	interface PostMarkdownFile extends MarkdownFile {
		metadata: BaseMarkdownMetadata;
	}

	// Extend the base metadata and add unique fields for projects
	interface ProjectMarkdownFile extends MarkdownFile {
		metadata: BaseMarkdownMetadata & {
			image: string;
			liveURL: string;
			githubURL: string;
		};
	}
}

export {};
