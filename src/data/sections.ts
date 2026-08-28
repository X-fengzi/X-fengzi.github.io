export const sections = [
  {
    key: 'works',
    index: '01',
    eyebrow: 'Creative works',
    title: '创作',
    description: '设计、图像、摄影与程序实验。这里保存完成的作品，也保存值得继续追踪的尝试。',
    accent: 'blue',
  },
  {
    key: 'essays',
    index: '02',
    eyebrow: 'Long-form thinking',
    title: '文章',
    description: '关于创作过程、个人方法与持续思考的长文。给一个问题足够的空间，不急着抵达结论。',
    accent: 'signal',
  },
  {
    key: 'notes',
    index: '03',
    eyebrow: 'Fragments & notes',
    title: '片段',
    description: '短句、观察、灵感与暂时无法归类的碎片。它们很小，但不等于不重要。',
    accent: 'ink',
  },
  {
    key: 'series',
    index: '04',
    eyebrow: 'Ongoing series',
    title: '专题',
    description: '围绕一个主题持续展开的创作计划。每个专题都是一条尚未结束的路径。',
    accent: 'blue',
  },
] as const;

export type Section = (typeof sections)[number];
export type SectionKey = Section['key'];
