// import test from "node:test";
import { basename, dirname } from 'path';
interface Project {
	slug: string;
	body: string;
	date: string;
	tags: string[];
	image: string;
	title: string;
	liveURL: string;
	githubURL: string;
	description: string;
}

interface Image {
	slug: string;
	path: string;
}

interface MarkdownFile {
	metadata: object;
	default: {
		render(): {
			html: string;
		};
	};
}

interface ImageFile {
	default: string;
}

const supportedImages = ['jpeg', 'jpg', 'png', 'gif'];
let allImages: Image[] = [];
let allProjects: Project[] = [];
let allTags: Set<string> = new Set<string>();

const importAllProjectFiles = async () => {
	// Using import.meta.glob to dynamically import all project files
	const imports = import.meta.glob('/.data/projects/**/project.*');
	const files = Object.entries(imports);

	// Use Promise.all to process all files in parallel
	await Promise.all(
		files.map(async ([filepath, module]) => {
			const ext = filepath.split('.').pop(); // Get file extension

			const slug = basename(dirname(filepath)); // Use the directory name as the project slug

			// Handle markdown files
			if (ext === 'md') {
				const file = (await module()) as MarkdownFile;

				// Check if the module export has metadata and call the default function for the body
				if (typeof file === 'object' && 'metadata' in file && slug) {
					const metadata = file.metadata;
					const body = file.default.render().html;

					const project = {
						slug,
						body,
						...metadata // Spread metadata to include it in the project object
					} as Project;

					// Ensure tags is an array, even if undefined
					if (!project.tags) project.tags = [];

					// Add project to the allProjects array
					allProjects = [...allProjects, project];
				}
			}
			// Handle supported image files
			else if (ext && supportedImages.includes(ext)) {
				const file = (await module()) as ImageFile;
				const path = file.default; // Get the image path

				const image = {
					slug,
					path
				};

				// Add image to the allImages array
				allImages = [...allImages, image];
			}
		})
	);
};

// After importing all project files, assign images to the projects and sort them
allProjects.forEach((project) => {
	const image = allImages.find((image) => image.slug === project.slug); // Find the corresponding image
	if (image) project.image = image.path;

	// Add tags to the allTags set
	for (const tag of project.tags) {
		allTags.add(tag);
	}

	// Format the date for each project
	project.date = new Date(project.date).toLocaleDateString('en-PH', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
});

await importAllProjectFiles();

allProjects.forEach((project) => {
	const image = allImages.find((image) => image.slug === project.slug);
	if (image) project.image = image.path;

	for (const tag of project.tags) {
		allTags = allTags.add(tag);
	}

	project.date = new Date(project.date).toLocaleDateString('en-PH', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
});

const sortedProjects = allProjects.sort((a, b) => {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const sortedTags = [...allTags].sort();

export const projects = sortedProjects;
export const tags = sortedTags;
