import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "work-template",
  description: "work-template介绍",
  locales: {
    root: { label: 'English' },
    zh: { label: '简体中文', link: 'https://cn.vitejs.dev' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
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
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'github', link: 'https://github.com/guoCertain' }
    ]
  },
  vite: {
    server: {
      // open: true,
      host: true,
      port: 1008
    }
  }
})
