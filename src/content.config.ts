import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		image: z.string().optional(),
	}),
});

const creative = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/creative' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number(),
		medium: z.string(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		image: z.string().optional(),
		externalUrl: z.string().url().optional(),
	}),
});

const research = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number(),
		kind: z.enum(['Research area', 'Paper', 'Preprint', 'Talk', 'Project', 'Thesis', 'Poster']),
		date: z.string().optional(),
		venue: z.string().optional(),
		authors: z.string().optional(),
		status: z.string().optional(),
		arxiv: z.string().url().optional(),
		doi: z.string().url().optional(),
		url: z.string().url().optional(),
		pdf: z.string().optional(),
		pdfReady: z.boolean().default(false),
		youtubeIds: z.array(z.string()).optional(),
		videoTitles: z.array(z.string()).optional(),
		github: z.string().url().optional(),
		showGithubPlaceholder: z.boolean().default(false),
		featured: z.boolean().default(false),
	}),
});

const teaching = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		term: z.string().optional(),
		institution: z.string().optional(),
		url: z.string().url().optional(),
		year: z.number().optional(),
		kind: z.enum(['Research area', 'Paper', 'Preprint', 'Talk', 'Project', 'Thesis', 'Poster']).optional(),
		date: z.string().optional(),
		venue: z.string().optional(),
		authors: z.string().optional(),
		status: z.string().optional(),
		arxiv: z.string().url().optional(),
		doi: z.string().url().optional(),
		pdf: z.string().optional(),
		pdfReady: z.boolean().default(false),
		youtubeIds: z.array(z.string()).optional(),
		videoTitles: z.array(z.string()).optional(),
		github: z.string().url().optional(),
		showGithubPlaceholder: z.boolean().default(false),
		featured: z.boolean().default(false),
	}),
});

export const collections = { writing, creative, research, teaching };
