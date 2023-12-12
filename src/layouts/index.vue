<script setup>
import Header from '@/layouts/Header.vue'
import Toolbar from '@/layouts/Toolbar.vue'
import LeftPanel from '@/layouts/LeftPanel.vue'
import { Home20Regular, GridDots24Filled, Add24Regular, Code16Regular, Settings16Filled, ChevronRight16Regular, ChevronLeft16Regular } from '@vicons/fluent'
const themeOverrides = {
  common: {
    primaryColor: '#0052d9'
  },
  Select: {
    peers: {
      InternalSelection: {
        borderHover: '1px solid #0052d9'
      },
    },
  },
  Input: {
    borderHover: '1px solid #0052d9'
  }
  // ...
}

const collapsed = ref(false)
const rightCollapsed = ref(false)

const leftPanelHandler = () => {
  collapsed.value = !collapsed.value
}
const rightPanelHandler = () => rightCollapsed.value = !rightCollapsed.value
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <div class="app-container" flex items-center justify-center h-screen w-screen>
        <div class="toolbar">
          <div class="logo">
            <n-icon :size="18">
              <GridDots24Filled />
            </n-icon>
          </div>
          <div class="toolbar-menu" text="[#666]">
            <div class="toolbar-menu-item selected">
              <STooltip placement="right" title="Home" :isIcon="false">
                <div flex items-center justify-center flex-col>
                  <n-icon :size="20">
                    <Home20Regular />
                  </n-icon>
                  <span text-11px>Home</span>
                </div>
              </STooltip>
            </div>
            <div class="toolbar-menu-item">
              <STooltip placement="right" title="Add" :isIcon="false">
                <div flex items-center justify-center flex-col>
                  <n-icon :size="20">
                    <Add24Regular />
                  </n-icon>
                  <span text-11px>Add</span>
                </div>
              </STooltip>
            </div>
            <div class="toolbar-menu-item">
              <STooltip placement="right" title="Notebook1" :isIcon="false">
                <div flex items-center justify-center flex-col>
                  <n-icon :size="20">
                    <Code16Regular />
                  </n-icon>
                  <span text-11px>Notebook1</span>
                </div>
              </STooltip>
            </div>
          </div>
        </div>
        <n-layout h-full>
          <n-layout-header class="header-container" h-48px>
            <Header @leftPanel="leftPanelHandler" @rightPanel="rightPanelHandler" :leftCollapsed="collapsed"
              :rightCollapsed="rightCollapsed" />
          </n-layout-header>
          <n-layout class="main-content" bg="[#E5E6EB]">
            <n-layout-header mb-3 h-80px shadow>
              <Toolbar />
            </n-layout-header>
            <a-layout-content>
              <n-layout has-sider sider-placement="right" class="main-content">
                <n-layout-sider bg="[#fff]" width="280px" class="sider-main" relative h-full :collapsed-width="0"
                  :collapsed="collapsed">
                  <div class="sider-content" h-full>
                    <!-- 这里是左侧面板区域 -->
                    <LeftPanel />
                  </div>
                  <div class="trigger-content" w-0 h-full absolute right-0 top-0>
                    <div class="inline-trigger" absolute top-0 flex h-full items-center justify-center opacity-0 z-2>
                      <div class="trigger" @click="collapsed = !collapsed" cursor-pointer relative h-35px w-15px
                        text-white flex items-center justify-center>
                        <n-icon>
                          <ChevronRight16Regular v-if="collapsed" />
                          <ChevronLeft16Regular v-else />
                        </n-icon>
                      </div>
                    </div>
                  </div>
                </n-layout-sider>
                <n-layout-content relative overflow-hidden>
                  <div class="main-column" p-20px>
                    <SqlEditor />
                    <Terminal />
                  </div>
                </n-layout-content>
              </n-layout>
            </a-layout-content>
          </n-layout>
        </n-layout>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}

.n-base-select-option {
  font-size: 12px !important;
}

.toolbar {
  background: #F1F2F5;
  height: 100%;
  box-sizing: border-box;
  flex: 0 0 68px;
  width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 68px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    opacity: 0.3;
    transition: all .2s;
    margin-bottom: 5px;

    &:hover {
      background-color: #e3e6eb;
      box-shadow: 0 2px 4px rgba(19, 22, 27, .08);
      opacity: .98;
    }
  }

  .toolbar-menu {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .toolbar-menu-item {
      height: 40px;
      width: 60px;
      padding: 8px 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: .25s;

      &:hover {
        background-color: #e3e6eb;
        box-shadow: 0 2px 4px rgba(19, 22, 27, .08);
        opacity: .98;
      }

      &.selected {
        color: var(--primary-color);
        background-color: #e3e6eb;
        box-shadow: 0 2px 4px rgba(19, 22, 27, .08);
        opacity: .98;
      }
    }
  }
}

.header-container {
  border-bottom: 1px solid #e3e6eb;
}

.main-content {
  height: calc(100% - 48px);
}

.sider-main {
  border-right: 1px solid #e3e6eb;
  display: flex;
  height: 100%;

  .inline-trigger {
    right: -15px;
    transition: .25s;

    .trigger {
      --bg: #bcc4d0;
      transition: all .15s;
      background: var(--bg);

      &::before,
      &::after {
        transition: all .15s;
        background: var(--bg);
        content: "";
        position: absolute;
        width: 15px;
        left: 0;
        height: 18px;
      }

      &::before {
        transform: skewY(-311deg);
        border-top-right-radius: 3px;
        top: -10px;
      }

      &::after {
        transform: skewY(-49deg);
        border-bottom-right-radius: 3px;
        bottom: -10px;
      }

      &:hover {
        --bg: #95A3B8;
      }
    }

    &:hover {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &.right {
    .inline-trigger {
      right: auto;
      left: -15px;

      .trigger {

        &::before {
          transform: skewY(311deg);
          border-top-right-radius: 3px;
          top: -10px;
        }

        &::after {
          transform: skewY(49deg);
          border-bottom-right-radius: 3px;
          bottom: -10px;
        }
      }
    }
  }
}

.main-column {
  width: 100%;
  height: calc(100vh - 48px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
}

.n-layout .n-layout-scroll-container {
  overflow: hidden !important;
}
</style>
