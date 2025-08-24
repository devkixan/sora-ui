<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroSection from '../../src/components/HeroSection.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>

    <template #home-hero-image>
      <HeroSection />
    </template>
  </Layout>
</template>