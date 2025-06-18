import fs from "node:fs/promises";
import path from "node:path";
import rehypeShiki from "@shikijs/rehype";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const postsDirectory = path.join(process.cwd(), "posts");

// Cache for better performance
let postsCache = null;
let postsCacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in development

async function getAllPosts() {
	// Check if cache is still valid
	if (postsCache && postsCacheTime) {
		const now = Date.now();
		if (
			now - postsCacheTime < CACHE_DURATION ||
			process.env.NODE_ENV === "production"
		) {
			return postsCache;
		}
	}

	try {
		const fileNames = await fs.readdir(postsDirectory);
		const markdownFiles = fileNames.filter((name) => name.endsWith(".md"));

		if (markdownFiles.length === 0) {
			console.warn("No markdown files found in posts directory");
			return [];
		}

		const posts = await Promise.all(
			markdownFiles.map(async (fileName) => {
				try {
					const fullPath = path.join(postsDirectory, fileName);
					const fileContents = await fs.readFile(fullPath, "utf8");
					const { data } = matter(fileContents);

					// Use slug from frontmatter, fallback to filename without extension
					const slug = data.slug || fileName.replace(/\.md$/, "");

					// Validate required fields
					if (!data.title) {
						console.warn(`Post ${fileName} missing title`);
					}
					if (!data.date) {
						console.warn(`Post ${fileName} missing date`);
					}

					return {
						id: slug,
						fileName,
						title: data.title || "Untitled",
						subtitle: data.subtitle || data.description,
						date: data.date,
						time: data.readingTime || data.time,
						link: `/posts/${slug}`,
						...data,
					};
				} catch (error) {
					console.error(`Error processing ${fileName}:`, error.message);
					return null;
				}
			}),
		);

		// Filter out failed posts and sort by date (newest first)
		const validPosts = posts.filter(Boolean);
		postsCache = validPosts.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateB - dateA;
		});

		postsCacheTime = Date.now();
		return postsCache;
	} catch (error) {
		console.error("Error reading posts directory:", error.message);
		return [];
	}
}

export async function getAllPostList() {
	const posts = await getAllPosts();
	// Filter out draft posts for public listing
	return posts.filter((post) => post.draft !== true);
}

export async function getPostData(id) {
	const posts = await getAllPosts();
	const post = posts.find((p) => p.id === id);

	if (!post) {
		throw new Error(`Post not found: ${id}`);
	}

	try {
		const fullPath = path.join(postsDirectory, post.fileName);
		const fileContents = await fs.readFile(fullPath, "utf8");
		const matterResult = matter(fileContents);

		const content = await unified()
			.use(remarkParse)
			.use(remarkRehype)
			.use(rehypeShiki, {
				themes: { light: "light-plus", dark: "vitesse-dark" },
				defaultColor: false,
			})
			.use(rehypeStringify)
			.process(matterResult.content);

		return {
			id,
			markup: { __html: content.toString() },
			...matterResult.data,
		};
	} catch (error) {
		console.error(`Error processing post ${id}:`, error.message);
		throw new Error(`Failed to process post: ${id}`);
	}
}

export async function getPostTitle(id) {
	const posts = await getAllPosts();
	const post = posts.find((p) => p.id === id);
	return post?.title;
}

// Clear cache function for development
export function clearPostsCache() {
	postsCache = null;
	postsCacheTime = null;
}

// Get post by slug (alias for getPostData for clarity)
export async function getPostBySlug(slug) {
	return await getPostData(slug);
}

// Get posts by category or tag
export async function getPostsByCategory(category) {
	const posts = await getAllPosts();
	return posts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag) {
	const posts = await getAllPosts();
	return posts.filter((post) => post.tags?.includes(tag));
}

// Get featured posts
export async function getFeaturedPosts() {
	const posts = await getAllPosts();
	return posts.filter((post) => post.featured === true && post.draft !== true);
}

// Get all posts including drafts (for admin/development use)
export async function getAllPostsIncludingDrafts() {
	return await getAllPosts();
}

// Get only published posts
export async function getPublishedPosts() {
	const posts = await getAllPosts();
	return posts.filter((post) => post.draft !== true);
}
