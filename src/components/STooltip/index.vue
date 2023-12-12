<script setup lang="ts">
// 继承n-tooltip的所有属性
import { NTooltip } from 'naive-ui'
import { PropType } from 'vue'

defineProps({
  placement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'bottom'
  },
  title: {
    type: String,
    default: ''
  },
  isIcon: {
    type: Boolean,
    default: true
  }
})

</script>

<template>
  <n-tooltip v-bind:placement="placement" class="somnia-tooltip">
    <template #trigger>
      <n-icon v-if="isIcon" :size="20" cursor-pointer>
        <slot />
      </n-icon>
      <slot v-else/>
    </template>
    {{ title }}
  </n-tooltip>
</template>
