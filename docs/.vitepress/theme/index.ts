// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AppLayout from './AppLayout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: AppLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
