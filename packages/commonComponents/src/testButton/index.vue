<script setup lang="ts">
// 框架
import { hello, useLodash } from '@learn_vue3/commonShared'
// 组件
// 方法/类型

/** 点击按钮执行方法 */
const handleBtnClick = () => {
  hello()
  const _ = useLodash()
  console.log(_.join(['a', 'b', 'c'], '-'))
  console.log(_)
}
</script>

<template>
  <button type="button" @click="handleBtnClick">
    <slot />
  </button>
</template>

<style scoped lang="scss"></style>
