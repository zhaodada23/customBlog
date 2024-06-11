<script setup lang="ts">
import {useGlobalResizeProvide} from "@/utils";
import {onMounted} from "vue";

useGlobalResizeProvide()
</script>

<template>
  <div class="w-full text-xl">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>