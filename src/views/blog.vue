<script setup lang="ts">
import {inject, onMounted} from "vue";
import {globalResizeEventKey} from "@/utils/customCompositionApi";

const windowSize = inject('windowSize') as  { width: number; height: number }
const breakPoint = inject('breakPoint')

onMounted(() => {
  window.addEventListener(globalResizeEventKey, (e) => {
    console.log('resize', windowSize.width, windowSize.height);
  })

})
</script>

<template>
  <div>blog123</div>
</template>

<style scoped>

</style>