import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "work-template",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  description: "work-template介绍",
  locales: {
    root: { label: '简体中文', lang: "zh" },
    en: { label: 'English', link: 'https://cn.vitejs.dev' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
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
  vite: {
    server: {
      host: true,
      port: 1008
    }
  }
})
