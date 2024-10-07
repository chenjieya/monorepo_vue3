<script setup lang="ts">
// 框架
import { ElInput } from 'element-plus'
import { ref, defineExpose } from 'vue'
// 组件
// 方法/类型

const inputRef = ref()

defineExpose(
  new Proxy(
    {},
    {
      get(target, key) {
        return inputRef.value?.[key]
      },
      has(target, key) {
        return key in inputRef.value
      }
    }
  )
)
</script>

<template>
  <el-input ref="inputRef" style="width: 240px" placeholder="Please input" v-bind="$attrs" />
</template>
