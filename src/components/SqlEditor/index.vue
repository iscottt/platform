<template>
  <div class="box">
    <Codemirror class="code" v-model="code" :style="{ height: '100%' }" :extensions="extensions" :autofocus="true"
      :disabled="false" @ready="handleClick('ready', $event)" @change="handleClick('change', $event)"
      @focus="handleClick('focus', $event)" @blur="handleClick('blur', $event)" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Codemirror } from "vue-codemirror";
import { sql } from "@codemirror/lang-sql";
const code = ref(`# Welcome to your new notebook\n# Type here in the cell editor to add code!`);
const extensions = [sql()];
const handleClick = (type: string, val: Event) => {
  console.log(type, val);
};
</script>
<style>
.box {
  width: 100%;
  height: calc(100% - 400px);
  border-radius: 5px;
}

.code {
  width: 100%;
  height: 100%;
}
</style>
