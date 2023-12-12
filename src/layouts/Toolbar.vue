<script setup lang="ts">
import HomeTools from './tools/home.vue'
import EditTools from './tools/edit.vue'
</script>

<template>
  <div class="toolbar-container" px-5 h-full>
    <n-tabs type="line" animated h-full>
      <n-tab-pane shadow name="Home" tab="Home">
        <HomeTools />
      </n-tab-pane>
      <n-tab-pane name="Edit" tab="Edit">
        <EditTools />
      </n-tab-pane>
      <n-tab-pane name="Run" tab="Run">
        Run
      </n-tab-pane>
      <n-tab-pane name="Data" tab="Data">
        Data
      </n-tab-pane>
      <n-tab-pane name="View" tab="View">
        View
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.n-tab-pane) {
  padding-top: 0 !important;
  height: 38px;
}
</style>
