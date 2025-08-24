import { defineConfig } from 'vitepress'
import { navItems, sideBarItems } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',

  title: " ",
  description: "UI component library built with Tailwind CSS and Alpine.js.",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/logo-light.svg',
      dark: '/images/logo-dark.svg'
    },

    search: {
      provider: 'local'
    },

    nav: navItems,

    sidebar: sideBarItems,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: 'A project by  <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">Kishan Sunar</a>.',
      copyright: `Copyright © 2025 Sora UI`
    }
  }
})
