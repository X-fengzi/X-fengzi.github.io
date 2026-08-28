# 内容发布指南

网站内容分为四个目录：

- `src/content/works/`：设计、摄影、图像和程序作品，支持 Markdown 与 MDX。
- `src/content/essays/`：长文与创作过程，支持 Markdown 与 MDX。
- `src/content/notes/`：短笔记和碎片，使用 Markdown。
- `src/content/series/`：持续更新的专题，支持 Markdown 与 MDX。

## 新建一篇文章

复制同目录下已有文件，修改文件名、顶部信息和正文。例如：

```md
---
title: 新文章标题
description: 用一两句话说明这篇内容。
pubDate: 2026-08-28
tags: [创作, 过程]
draft: true
featured: false
accent: blue
readingTime: 5 分钟
---

从这里开始写正文。
```

`draft: true` 时不会出现在正式网站；准备发布后改为 `false`。`accent` 可以使用 `blue`、`ink`、`signal` 或 `paper`。

作品需要额外填写 `medium` 和 `year`；专题需要填写 `status` 与 `count`。MDX 文件可以导入 Astro、React、Vue 或 Svelte 组件，用来制作交互创作。

## 发布

将改动提交并推送到 GitHub 的 `main` 分支。GitHub Actions 会自动构建并发布网站。
