<script setup lang="ts">
/**
 * @name Button
 * @description 按钮
 * Button
 * button.test.tsx
 * style.css
 * type.ts
 * constants.ts
 */
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import ErIcon from '../Icon/Icon.vue';
import { ref, computed } from 'vue';
import { throttle } from 'lodash-es';
defineOptions({ name: 'EnButton' });
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: 'primary',
  size: 'default',
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : 0,
}));
const handBtnClick = (e: MouseEvent) => {
  emits('click', e);
};

const handBtnThrottle = throttle(handBtnClick, props.throttleDuration || 1000);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :autofocus="autofocus || void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="[
      'en-button',
      {
        [`en-button--${type}`]: type,
        [`en-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    @click="
      (e: MouseEvent) => (useThrottle ? handBtnThrottle(e) : handBtnClick(e))
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <ErIcon
          class="loading-icon"
          :style="iconStyle"
          :icon="loadingIcon || 'spinner'"
          size="1x"
          spin
        />
      </slot>
    </template>
    <ErIcon v-if="icon && !loading" :style="iconStyle" :icon="icon" size="1x" />
    <slot></slot>
  </component>
</template>
<style scoped>
@import './style.css';
</style>
