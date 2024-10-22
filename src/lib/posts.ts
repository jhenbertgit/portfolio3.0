import { processPostMarkdownFile } from '$lib';

const allTags: Set<string> = new Set<string>();

let allPosts: Post[] = [];

// Function to import all post files dynamically
const importAllPostFiles = async () => {
	const imports = import.meta.glob('/.data/posts/**/post.md');
	const files = Object.entries(imports);

	const postList = await Promise.all(
		files.map(([filepath, module]) => processPostMarkdownFile(filepath, module))
	);

	// Update global arrays with new posts
	allPosts = [...allPosts, ...postList];

	// Collect tags from all posts
	postList.forEach((post) => {
		post.tags.forEach((tag) => allTags.add(tag));
	});
};

// Call the import function
await importAllPostFiles();

// Sort posts by date
const sortedPosts = allPosts.sort((a, b) => {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
});

// Sort tags alphabetically
const sortedTags = [...allTags].sort();

// Export sorted posts and tags
export const posts = sortedPosts;
export const tags = sortedTags;
