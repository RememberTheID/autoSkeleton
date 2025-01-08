<script setup lang="ts">
import {ref} from 'vue'
import { NSwitch } from 'naive-ui'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const showLoading = ref(true)
import { vSkeleton} from '@/directives/skeleton'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <div class="mt-4">
      <n-switch v-model:value="showLoading">
        <template #checked>
          show
        </template>
        <template #unchecked>
          hide
        </template>
      </n-switch>
    </div>
  </header>

  <main v-skeleton="showLoading">
    <TheWelcome />
  </main>
</template>

<style>

/*  autoSkeleton css  start*/
@keyframes dancingColors {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  .gradient {
    background: linear-gradient(-90deg, #f5f5f5 25%, #e6e6e6 37%, #f5f5f5 63%);
    background-size: 400% 100%;
    color: transparent;
    animation: dancingColors 3s ease infinite;
  }
  /*  autoSkeleton css  end*/

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.mt-4{
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
