import { getLatestPosts } from '$lib/server/posts';

export function load() {
	return {
		latestPosts: getLatestPosts(3)
	};
}
