<script setup lang="ts">
import { HomeCheckmark24Regular, Copy16Regular, Folder28Regular, ChevronRight28Regular, Table32Regular, NumberSymbolSquare20Regular } from '@vicons/fluent';
import { NIcon, TreeOption } from 'naive-ui'
// 用于构造数据，正式环境去除
import { repeat } from 'seemly'


function createData(level = 3, baseKey = ''): TreeOption[] | undefined {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = '' + baseKey + level + index
    const label = createLabel(level)
    return {
      label,
      key,
      level,
      children: createData(level - 1, key),
      prefix: () => {
        if (level === 3) {
          return h(NIcon, { size: 16 }, {
            default: () => h(Folder28Regular)
          })
        } else if (level === 2) {
          return h(NIcon, { size: 16 }, {
            default: () => h(Table32Regular)
          })
        } else {
          return h(NIcon, { size: 20 }, {
            default: () => h(NumberSymbolSquare20Regular)
          })
        }
      }
    }
  })
}

function createLabel(level: number): string {
  if (level === 3) return '道生一'
  if (level === 2) return '一生二'
  if (level === 1) return '二生三'
  return ''
}

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])

const renderSwitcherIconWithExpaned = () => {
  return h(NIcon, null, {
    default: () => h(ChevronRight28Regular)
  })
}
</script>

<template>
  <div w-full h-full p-2 box-border>
    <n-tabs w-full type="line" size="small" justify-content="flex-start">
      <n-tab-pane name="1">
        <template #tab>
          <div flex items-center justify-center gap-2>
            <n-icon :size="20">
              <HomeCheckmark24Regular />
            </n-icon>
            <span text-12px>Lakehouses</span>
          </div>
        </template>
        <div class="title" m-2 font-500 text-18px>
          Lakehouses
        </div>

        <n-tree show-line :render-switcher-icon="renderSwitcherIconWithExpaned" block-line :data="data"
          :default-expanded-keys="defaultExpandedKeys" :selectable="false" />
      </n-tab-pane>
      <n-tab-pane name="2" tab="Resource">
        <template #tab>
          <div flex items-center justify-center gap-2>
            <n-icon :size="20">
              <Copy16Regular />
            </n-icon>
            <span text-12px>Resource</span>
          </div>
        </template>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  height: 100%;
  width: 100%;
  background-color: white;
  contain: layout;
  box-sizing: border-box;
  box-shadow: -5px 5px 10px 0 rgba(0, 0, 0, 0.1);
}

.icon {
  fill: currentColor;
  height: 1em;
  vertical-align: -0.15em;
  width: 1em;
}

.copy {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #f5f5f5;
  }
}

:deep(.n-tabs-wrapper) {
  gap: 15px;
}
</style>
