import { defineConfig } from 'vitepress'
import { search as searchConfig } from "./themeConfig/search";

// https://vitepress.dev/reference/site-config
/** @type {import('vitepress').UserConfig} */
export default defineConfig({
  title: "work-template",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  description: "work-template介绍",
  lastUpdated: true,
  locales: {
    root: { label: '简体中文', lang: "zh" },
    en: { label: 'English', link: 'https://cn.vitejs.dev' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          ...searchConfig
        }
      }
    },
    outline: {
      label: '页面导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    nav: [
      { text: '配置', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '说明',
        items: [
          { text: 'Markdown 说明', link: '/markdown-examples' },
          { text: 'Runtime API 说明', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yolo-00' },
      { icon: 'x', link: 'https://twitter.com/Yolo__00' },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/Yolo-00/work-template/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/Yolo-00">Yolo-00</a>'
    }
  },
  /** @type {import('vite').UserConfig} */
  vite: {
    server: {
      host: true,
      port: 1008,
      proxy: {
        "/prod-api": {
          target: "https://backend-store-dev.dev.qcdl.com.cn/prod-api",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/prod-api/, ""),
        },
      },
    },
  }
})
