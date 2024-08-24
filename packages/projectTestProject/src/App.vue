<script setup lang="ts">
import { h } from 'vue'
import { VNode } from '@learn_vue3/commonComponents'

const v = h(VNode, {
  name: '李四',
  email: '176@163.com'
})
console.log('vnode:', v)

</script>

<template>
  <div class="app-container">
    <h1>这是App组件</h1>
    <VNode name="张三" email="188@163.com" />
    <!-- 渲染vnode -->
    <component :is="v" />
  </div>
</template>

<style scoped>
.app-container {
  width: 400px;
  border: 1px solid;
}
</style>
