import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const sectionNames = {
    works: '创作',
    essays: '文章',
    notes: '片段',
    series: '专题',
  };
  const items = [];

  for (const collection of Object.keys(sectionNames)) {
    const entries = await getCollection(collection, ({ data }) => !data.draft);
    items.push(...entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/${collection}/${entry.id}/`,
      categories: [sectionNames[collection], ...entry.data.tags],
    })));
  }

  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'XFENGZI — 创作档案',
    description: '记录设计、图像、程序实验与仍在生长的想法。',
    site: context.site,
    items,
    customData: '<language>zh-CN</language>',
  });
}
