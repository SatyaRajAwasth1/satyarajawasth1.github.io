import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Each collection is a YAML list in src/data/. Every entry needs a unique `id`.
// Sections whose file is an empty list ([]) are hidden on the site.

const news = defineCollection({
  loader: file('src/data/news.yml'),
  schema: z.object({
    date: z.coerce.date(),
    text: z.string(), // inline HTML allowed, e.g. <a href="...">link</a>
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    note: z.string().optional(), // e.g. "Best Paper Award", "Under review"
    links: z
      .object({
        pdf: z.string().optional(),
        arxiv: z.string().optional(),
        doi: z.string().optional(),
        code: z.string().optional(),
        slides: z.string().optional(),
      })
      .optional(),
  }),
});

const entry = z.object({
  order: z.number(), // lower = shown first
  title: z.string(),
  org: z.string().optional(),
  url: z.string().optional(),
  period: z.string().optional(),
  location: z.string().optional(),
  details: z.array(z.string()).optional(),
});

const experience = defineCollection({ loader: file('src/data/experience.yml'), schema: entry });
const education = defineCollection({ loader: file('src/data/education.yml'), schema: entry });
const service = defineCollection({ loader: file('src/data/service.yml'), schema: entry });

export const collections = { news, publications, experience, education, service };
