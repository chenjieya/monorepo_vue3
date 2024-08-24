<script setup lang="ts">
// 框架
// 组件
// 方法/类型
import { ToDoListItem } from '@/types/index'

const model = defineModel<ToDoListItem[]>()

/**
 * 添加待办事项
 */
const addTodo = ($event) => {
  const value = $event.target.value.trim()
  if (value) {
    model.value.unshift({
      id: Date.now(),
      title: value,
      completed: false
    })
  }
  $event.target.value = ''
}
</script>

<template>
  <header class="header">
    <h1>待办事项</h1>
    <input
      @keyup.enter="addTodo"
      @vue:mounted="({el}) => el.focus()"
      type="text"
      class="new-todo"
      placeholder="添加新的待办事项"
    />
  </header>
</template>

<style scoped src="./header.css"></style>
