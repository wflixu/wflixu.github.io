---
layout: ../../layouts/PostLayout.astro
title: "Astro 快速入门"
date: "2023-08-01"
description: "introdu astro"
author: "lx"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["技术", "astro"]
---

# Astro

Astro 是专注内容的框架，可以集成其他 UI 框架
![Alt text](image.png)

## css 变量

```html
const skillColor = "navy";

<style define:vars="{{skillColor}}">
  h1 {
    color: purple;
    font-size: 4rem;
  }
  .skill {
    color: green;
    color: var(--skillColor);
    font-weight: bold;
  }
</style>
```

## 全局样式

全局样式在 global.css 在组件中引入

```js
import "../styles/global.css";
```
