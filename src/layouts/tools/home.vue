<script setup lang="ts">
import {
  Save20Regular,
  Settings20Regular,
  ArrowDownload24Regular,
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
const options1 = ref([
  {
    label: "PySpark（Python）",
    value: '1'
  },
  {
    label: 'Spark（Scala）',
    value: '2'
  }])
</script>

<template>
  <div class="inline-tools" h-full flex items-center justify-start gap-2>
    <STooltip title="保存" placement="top">
      <Save20Regular />
    </STooltip>
    <STooltip title="下载" placement="top">
      <ArrowDownload24Regular />
    </STooltip>
    <STooltip title="设置" placement="top">
      <Settings20Regular />
    </STooltip>
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
    <n-divider vertical />
    <span>Language</span>
    <n-select w-200px mr-2 size="small" v-model:value="value" :options="options1" />
  </div>
</template>
