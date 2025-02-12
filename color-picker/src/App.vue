<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { computed, ref } from 'vue'
const colorPicker = ref('#000000');
const color= computed(()=>colorPicker.value);

</script>

<template>
  <div class="input-color">
    <input type="text" v-model="colorPicker" placeholder="Input color" />
    <p>{{ color }}</p>
  </div>
  <div class="result-color">
    <div class="color" :style="{ backgroundColor: color }"></div>

  </div>
</template>

<style scoped>
.color {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
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
