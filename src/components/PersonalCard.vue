<script setup lang="ts">
const props = defineProps({
  userId: String
})
</script>

<template>
<div>
  {{userId}}
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</div>
</template>

<style scoped>

</style>