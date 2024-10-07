<script setup lang="ts">
// 框架
import { ref } from 'vue'
// 组件
import byElInput from './byElInput.vue'
// 方法/类型

const testVal = ref()
const byElInputRef = ref()
</script>

<template>
  <div id="container">
    <by-el-input ref="byElInputRef" v-model="testVal" @vue:mounted="(e) => byElInputRef.focus()" />
  </div>
</template>
