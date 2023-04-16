<script setup lang='ts'>
defineOptions({
  name: 'RlButton',
})
const props = defineProps({
  text: String
})

</script>

<template>
  <div class="rl-base rl-button">
    {{ props.text }}
  </div>
</template>