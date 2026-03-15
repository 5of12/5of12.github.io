export type JournalPost = {
	slug: string;
	title: string;
	author: string;
	date: string;
	formattedDate: string;
	excerpt: string;
	html: string;
	coverImage: string | null;
	readingTime: number;
};
