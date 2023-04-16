<script setup lang='ts'>
defineOptions({
  name: 'RlText',
})
const props = defineProps({
  text: String
})
</script>

<template>
  <div class="rl-base rl-text">
    {{props.text}}
  </div>
</template>