<script setup lang="ts">

import { h, defineComponent } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]


const message = useMessage()
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`)
  }
})
const pagination = false
</script>

<template>
  <div class="terminal-container">
    <!-- 这里是输出结果... -->
    <n-tabs size="small" type="line" animated w-full justify-content="center">
      <n-tab-pane name="信息" tab="信息">
        <p>SELECT * from `user` WHERE username='test'</p>
        <p>> OK</p>
        <p>> Time: 0s</p>
      </n-tab-pane>
      <n-tab-pane name="Summary" tab="Summary">
        <n-data-table size="small" :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
      </n-tab-pane>
      <n-tab-pane name="结果1" tab="结果1">
        结果1
      </n-tab-pane>
      <n-tab-pane name="剖析" tab="剖析">
        剖析
      </n-tab-pane>
      <n-tab-pane name="状态" tab="状态">
        状态
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style lang="scss" scoped>
.terminal-container {
  height: 300px;
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 20px;
  background: #F8F8F8;
  padding: 0 20px;
  box-sizing: border-box;

  p {
    margin: 0;
  }
}
</style>
