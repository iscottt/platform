<script setup>
import { Search32Filled, ChatHelp20Regular, Settings20Regular, AlertOn24Regular } from '@vicons/fluent'
const options = [
  {
    label: "Notebook | Saved",
    value: 'song0'
  },
  {
    label: '页面：角色管理',
    value: 'song1'
  }]
const value = ref('song0')

const leftPanel = () => emits('leftPanel')
const rightPanel = () => emits('rightPanel')
</script>

<template>
  <div class="header-content" relative>
    <!-- 左侧 -->
    <div class="header-left" flex items-center justify-center>
      <div class="page-menu" flex items-center justify-between h-full gap-2>
        <n-select v-model:value="value" :options="options" />
        <!-- <div class="new-page" cursor-pointer flex items-center justify-center p-1 rounded-4px>
          <n-tooltip placement="bottom" class="somnia-tooltip">
            <template #trigger><n-icon :size="22">
                <AddSquareMultiple20Regular />
              </n-icon>
            </template>
            新建页面
          </n-tooltip>
        </div> -->
      </div>
    </div>
    <!-- 中间搜索区域 -->
    <div class="app-info" absolute>
      <n-input ref="inputREF" class="!w-300px" type="text" placeholder="搜索">
        <template #prefix>
          <n-icon :component="Search32Filled" />
        </template>
      </n-input>
    </div>
    <!-- 右侧 -->
    <div class="header-right" flex items-center justify-center gap-4>
      <div class="operation-item-container">
        <!-- 通知 -->
        <n-badge :value="20" processing cursor-pointer>
          <STooltip placement="bottom" title="通知">
            <AlertOn24Regular />
          </STooltip>
        </n-badge>
      </div>
      <div class="operation-item-container">
        <STooltip placement="bottom" title="设置">
          <Settings20Regular />
        </STooltip>
      </div>
      <div class="operation-item-container">
        <STooltip placement="bottom" title="帮助中心">
          <ChatHelp20Regular />
        </STooltip>
      </div>
      <div class="operation-item-container" w-34px>
        <STooltip placement="bottom" title="个人中心" :isIcon="false">
          <n-avatar round cursor-pointer />
        </STooltip>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    color: #000000e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    .page-menu {
      position: relative;
      width: 280px;
      padding: 0 8px;
      box-sizing: border-box;

      &::before {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top: 8px;
        bottom: 8px;
        width: 1px;
        background-color: #e3e6eb;
      }
    }

    .new-page {
      transition: .25s;

      &:hover {
        background: #f1f2f5;
      }
    }

    .operation-item-container {
      position: relative;
      height: 28px;
      border-radius: 4px;
      width: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-sizing: border-box;
      transition: .25s;
      background: #f1f2f5;

      &:hover {
        background: #d4e3fc;
        color: #0052d9;
      }

      &.selected {
        background: #d4e3fc;
        color: #0052d9;
      }
    }

    :deep(.n-base-selection-input__content) {
      font-size: 12px;
    }
  }

  .app-info {
    left: 50%;
    transform: translate(-50%);
  }

  .header-right {
    margin-right: 40px;

    .preview,
    .release {
      border-radius: 4px;
      height: auto;
      padding: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
    }

    .release {
      padding: 6px 12px;
      gap: 5px;
    }
  }
}
</style>
