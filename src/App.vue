<script lang="ts" setup>


</script>
 
<template>
  <router-view #="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
