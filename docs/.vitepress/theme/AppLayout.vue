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

    <template #home-features-after>
      <div class="px-9 xl:px-0 max-w-[1152px] mx-auto">
        Helo
      </div>
    </template>
  </Layout>
</template>