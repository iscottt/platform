<script setup lang="ts">
import {
  Delete20Regular,
  Copy24Regular,
  ArrowSortDown20Regular,
  ArrowSortUp20Regular,
  ClipboardPaste16Regular,
  ArrowUndo16Regular,
  ArrowRedo24Regular,
  Play24Regular
} from '@vicons/fluent'
import { ref } from 'vue';
const value = ref('1')
const options = ref([
  {
    label: "Run all",
    value: '1'
  },
  {
    label: 'Cancel all',
    value: '2'
  }])

const options3 = ref([
  {
    label: "On",
    value: '1'
  },
  {
    label: 'Off',
    value: '2'
  }])
</script>

<template>
  <div class="inline-tools" h-full flex items-center justify-start gap-2>
    <span>AutoSave</span>
    <n-select w-100px mr-2 size="small" v-model:value="value" :options="options3" />

    <n-divider vertical />
    <STooltip title="Undo" placement="top">
      <ArrowUndo16Regular />
    </STooltip>
    <STooltip title="Redo" placement="top">
      <ArrowRedo24Regular />
    </STooltip>
    <STooltip title="Copy" placement="top">
      <Copy24Regular />
    </STooltip>
    <STooltip title="Paste" placement="top">
      <ClipboardPaste16Regular />
    </STooltip>
    <STooltip title="Move Cell(s) up" placement="top">
      <ArrowSortUp20Regular />
    </STooltip>
    <STooltip title="Move Cell(s) down" placement="top">
      <ArrowSortDown20Regular />
    </STooltip>
    <STooltip title="Delete" placement="top">
      <Delete20Regular />
    </STooltip>
    <!-- Delete20Regular -->
    <n-divider vertical />
    <div flex items-center>
      <n-button size="small">
        <template #icon>
          <n-icon>
            <Play24Regular />
          </n-icon>
        </template>
      </n-button>
      <n-select w-120px mr-2 size="small" v-model:value="value" :options="options" />
    </div>
    <n-checkbox>Stop Session</n-checkbox>
  </div>
</template>
