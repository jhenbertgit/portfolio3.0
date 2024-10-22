// import test from "node:test";
import { basename, dirname } from 'path';
import { processProjectMarkdownFile } from '$lib';

interface Image {
	slug: string;
	path: string;
}

interface ImageFile {
	default: string;
}

const supportedImages = ['jpeg', 'jpg', 'png', 'gif'];
const allTags: Set<string> = new Set<string>();

let allImages: Image[] = [];
let allProjects: Project[] = [];

// Function to import all project files dynamically
const importAllProjectFiles = async () => {
	const imports = import.meta.glob('/.data/projects/**/project.*');
	const files = Object.entries(imports);

	// Temporary arrays for projects and images
	const projectList: Project[] = [];
	const imageList: Image[] = [];

	await Promise.all(
		files.map(async ([filepath, module]) => {
			const ext = filepath.split('.').pop() || ''; // Fallback to empty string if no extension
			const slug = basename(dirname(filepath)); // Use the directory name as the project slug

			// Handle markdown files
			if (ext === 'md') {
				const project = await processProjectMarkdownFile(filepath, module);
				projectList.push(project);
			}
			// Handle image files
			else if (supportedImages.includes(ext)) {
				const file = (await module()) as ImageFile;
				imageList.push({
					slug,
					path: file.default
				});
			}
		})
	);

	// Update global arrays
	allProjects = [...allProjects, ...projectList];
	allImages = [...allImages, ...imageList];
};

// Import all project files
await importAllProjectFiles();

// Assign images to projects and add tags to the set
allProjects.forEach((project) => {
	// Find the corresponding image
	const image = allImages.find((img) => img.slug === project.slug);
	if (image) project.image = image.path;

	// Add project tags to the global tag set
	project.tags.forEach((tag) => allTags.add(tag));
});

// Sort projects by date
const sortedProjects = allProjects.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Sort tags alphabetically
const sortedTags = [...allTags].sort();

// Export sorted projects and tags
export const projects = sortedProjects;
export const tags = sortedTags;
