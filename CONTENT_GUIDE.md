# 内容发布指南

网站内容分为四个目录：

- `src/content/works/`：设计、摄影、图像和程序作品，支持 Markdown 与 MDX。
- `src/content/essays/`：长文与创作过程，支持 Markdown 与 MDX。
- `src/content/notes/`：短笔记和碎片，使用 Markdown。
- `src/content/series/`：持续更新的专题，支持 Markdown 与 MDX。

## 从网页编辑与发布（推荐）

1. 打开网站右上角的“编辑 / 发布”，进入 Pages CMS。
2. 首次使用 GitHub 登录，并安装 Pages CMS GitHub App；仓库权限只选择 `X-fengzi.github.io`。
3. 选择“创作 / 文章 / 片段 / 专题”，新建或编辑内容。
4. 写作过程中开启“保存为草稿”；准备公开时关闭草稿并保存。
5. 保存会产生一次 Git 提交，并自动触发 GitHub Pages 更新，通常需要 1–3 分钟。

也可以直接访问 `https://app.pagescms.org/`。图片会上传到 `public/images/`，正文中自动写入公开路径。

## 使用文件新建内容

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
