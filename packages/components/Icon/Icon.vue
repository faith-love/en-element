<script setup lang="ts">
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';
import { computed } from 'vue';
defineOptions({ name: 'EnIcon', inheritAttrs: false });
const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']));
const customStyle = computed(() => ({
  color: props.color ?? void 0,
}));
</script>

<template>
  <i
    class="en-icon"
    :class="[`en-icon-${type}`, `en-icon-${color}`]"
    :style="customStyle"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filterProps" />
  </i>
</template>

<style scoped></style>
