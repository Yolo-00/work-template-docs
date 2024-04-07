---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "work-template"
  text: "work-template 文档"
  tagline: 开箱即用的前端模板框架
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /markdown-examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/Yolo-00/work-template

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Yolo-00.png',
    name: 'Yolo-00',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Yolo-00' },
      { icon: 'x', link: 'https://twitter.com/Yolo__00' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
