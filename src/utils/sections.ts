import { getCollection } from 'astro:content';

export interface SectionLink {
  id: string;
  title: string;
}

/**
 * Loads the home page collections and lists the sections that have content, in page order.
 * Used by the home page (to render sections) and the header (to build the nav on every page),
 * so an emptied data file never leaves a link to a missing section.
 */
export async function getHomeSections() {
  const [news, publications, experience, education, service] = await Promise.all([
    getCollection('news'),
    getCollection('publications'),
    getCollection('experience'),
    getCollection('education'),
    getCollection('service'),
  ]);

  const sections: SectionLink[] = [
    { id: 'research', title: 'Research', show: true },
    { id: 'news', title: 'News', show: news.length > 0 },
    { id: 'publications', title: 'Publications', show: publications.length > 0 },
    { id: 'experience', title: 'Experience', show: experience.length > 0 },
    { id: 'education', title: 'Education', show: education.length > 0 },
    { id: 'service', title: 'Service', show: service.length > 0 },
  ]
    .filter((s) => s.show)
    .map(({ id, title }) => ({ id, title }));

  return { sections, collections: { news, publications, experience, education, service } };
}
