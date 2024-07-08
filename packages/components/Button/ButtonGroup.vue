<script setup lang="ts">
import type { ButtonGroupProps } from './types';
import { BUTTON_GROUP_CTX_KEY } from './constant';
import { provide, reactive, toRef } from 'vue';
defineOptions({
  name: 'EnButtonGroup',
});
const props = defineProps<ButtonGroupProps>();
provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled'),
  })
);
</script>
<template>
  <div class="en-button-group">
    <slot></slot>
  </div>
</template>
<style scoped>
@import './style.css';
</style>
