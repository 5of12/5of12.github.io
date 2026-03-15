import matter from 'gray-matter';
import { marked } from 'marked';
import type { JournalPost } from '$lib/content/types';

const rawPosts = import.meta.glob('../../../_posts/*.{md,markdown}', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

marked.setOptions({
	gfm: true,
	breaks: false
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
});

function getSlug(filePath: string) {
	const fileName = filePath.split('/').pop() ?? filePath;
	return fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.(md|markdown)$/, '');
}

function getDate(filePath: string) {
	const match = filePath.match(/(\d{4}-\d{2}-\d{2})-/);
	return match?.[1] ?? '1970-01-01';
}

function humanizeSlug(slug: string) {
	return slug
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

function normalizeMarkdown(content: string) {
	return content
		.replace(
			/\{%\s*post_url\s+([0-9]{4}-[0-9]{2}-[0-9]{2}-[a-z0-9-]+)\s*%\}/g,
			(_, postName: string) => `/journal/${postName.replace(/^\d{4}-\d{2}-\d{2}-/, '')}/`
		)
		.trim();
}

function extractExcerpt(content: string) {
	const plainText = normalizeMarkdown(content)
		.replace(/<iframe[\s\S]*?<\/iframe>/g, ' ')
		.replace(/<video[\s\S]*?<\/video>/g, ' ')
		.replace(/<img[^>]*>/g, ' ')
		.replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
		.replace(/^---+$/gm, ' ')
		.replace(/^#+\s.*$/gm, ' ')
		.replace(/^[-*]\s.*$/gm, ' ')
		.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
		.replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	const sentences = plainText
		.split(/(?<=[.!?])\s+/)
		.filter((sentence) => sentence.length > 35);

	return sentences.slice(0, 2).join(' ').trim();
}

function extractCoverImage(content: string) {
	const markdownImage = content.match(/!\[[^\]]*]\((\/assets\/[^)\s]+)[^)]*\)/);
	if (markdownImage?.[1]) {
		return markdownImage[1];
	}

	const htmlImage = content.match(/<img[^>]*src="([^"]+)"/);
	if (htmlImage?.[1]) {
		return htmlImage[1];
	}

	return null;
}

function estimateReadingTime(content: string) {
	const text = content
		.replace(/<[^>]+>/g, ' ')
		.replace(/\[[^\]]+]\(([^)]+)\)/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	const words = text ? text.split(/\s+/).length : 0;
	return Math.max(1, Math.round(words / 220));
}

function decorateLinks(html: string) {
	return html.replace(/<a\s+href="(https?:\/\/[^"]+)"(?![^>]*target=)([^>]*)>/gi, (_match, href: string, rest: string) => {
		return `<a href="${href}" target="_blank" rel="noreferrer noopener"${rest}>`;
	});
}

function parsePost(filePath: string, raw: string): JournalPost {
	const slug = getSlug(filePath);
	const date = getDate(filePath);
	const { data, content } = matter(raw);
	const markdown = normalizeMarkdown(content);

	return {
		slug,
		title: typeof data.title === 'string' ? data.title : humanizeSlug(slug),
		author: typeof data.author === 'string' ? data.author : '5of12',
		date,
		formattedDate: dateFormatter.format(new Date(`${date}T00:00:00Z`)),
		excerpt: extractExcerpt(content),
		html: decorateLinks(marked.parse(markdown) as string),
		coverImage: extractCoverImage(content),
		readingTime: estimateReadingTime(content)
	};
}

export const posts = Object.entries(rawPosts)
	.map(([filePath, raw]) => parsePost(filePath, raw))
	.sort((a, b) => b.date.localeCompare(a.date));

export function getLatestPosts(count: number) {
	return posts.slice(0, count);
}

export function getPostBySlug(slug: string) {
	return posts.find((post) => post.slug === slug) ?? null;
}
