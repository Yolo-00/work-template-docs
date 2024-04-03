import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "work-template",
  description: "work-template介绍",
  locales: {
    root: { label: '简体中文', lang: "zh" },
    en: { label: 'English', link: 'https://cn.vitejs.dev' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/public/favicon.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
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
      { text: 'Config', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/Yolo__00' },
      { icon: 'github', link: 'https://github.com/Yolo-00' }
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
