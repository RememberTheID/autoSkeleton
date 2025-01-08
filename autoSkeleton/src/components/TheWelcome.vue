<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { vSkeletonItem } from '@/directives/skeleton'
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>
<style>
.circle{
  width:10rem;
  height: 10rem;
  margin-top: 1rem;
  border-radius: 50%;
  background-color: bisque;
}
</style>
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <span v-skeleton-item>Documentation</span>
    </template>
    <p v-skeleton-item>
      <span>Vue’s</span>
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      <span>provides you with all information you need to get started.</span>
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading><span v-skeleton-item>Tooling</span></template>
    <p v-skeleton-item>
      <span>This project is served and bundled with</span>
      <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.
      <span>The recommended IDE setup is</span>
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
      <span>+</span>
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>.
      <span>If you need to test your components and web pages, check out</span>
      <a href="https://vitest.dev/" target="_blank" rel="noopener">Vite</a>
      <span>and</span>
      <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
      <span>/</span>
      <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>.
      <br />
      <span>More instructions are available in</span>
      <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a>.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading><span v-skeleton-item>Ecosystem</span></template>
    <span>Get official tools and libraries for your project:</span>
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>,
    <span>and</span>
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>.
    <span>If you need more resources, we suggest paying</span>
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    <span>a visit.</span>
     <div v-skeleton-item class="circle"></div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading><span >Community</span></template>
    <span>Got stuck? Ask your question on</span>
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    <span>(our official Discord server), or</span>
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>.
    <span>You should also follow the official</span>
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    <span>Bluesky account or the</span>
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    <span>X account for
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      and
      <a href="https://www.facebook.com/vuejs" target="_blank" rel="noopener">Facebook</a>.
    </span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading><span>Support Vue</span></template>
    <span>As an independent project, Vue relies on community backing for its sustainability.</span>
    <a href="https://donate.vuejs.org/" target="_blank" rel="noopener">Become a sponsor</a>.
  </WelcomeItem>
</template>

