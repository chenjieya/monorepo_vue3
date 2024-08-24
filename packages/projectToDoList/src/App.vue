<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import Header from '@/components/header/header.vue'
import List from '@/components/list/list.vue'
import Footer from '@/components/footer/footer.vue'

import { ToDoListStatus } from '@/enum/index'
import { ToDoListItem } from '@/types/index'

// 定义存储的KEY
const STORAGE_KEY = 'ALVIS_TODO_KEY'
// 定义当前事项的状态
const visibility = ref<ToDoListStatus>(ToDoListStatus.ALL)

// 定义待办状态状态对应的方法
const filters: {
  [key in ToDoListStatus]: (todos: any[]) => any
} = {
  [ToDoListStatus.ALL]: (todos: ToDoListItem[]) => todos,
  [ToDoListStatus.ACTIVE]: (todos: ToDoListItem[]) => todos.filter(todo => !todo.completed),
  [ToDoListStatus.COMPLETED]: (todos: ToDoListItem[]) => todos.filter(todo => todo.completed)
}

// 定义全部数据
const todolist = ref<ToDoListItem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

// 过滤数据
const filterTodos = computed(() => filters[visibility.value](todolist.value))
const remaining = computed(() => filters[ToDoListStatus.ACTIVE](todolist.value).length)

/** 监听待办事项，发生变化就重新存储 */
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todolist.value))
}) 


const hashChange = () => {
  const route = window.location.hash.replace(/#\/?/, '')
  if (filters[route]) {
    visibility.value = route as ToDoListStatus
  } else {
    window.location.hash = ''
    visibility.value = ToDoListStatus.ALL
  }
}

window.addEventListener('hashchange', hashChange)

const deleteCompletedAll = () => {
  if (window.confirm('确定要删除所有已完成的待办事项吗？')) {
    todolist.value = filters[ToDoListStatus.ACTIVE](todolist.value)
  }
}
  
</script>

<template>
  <!-- 最外层的容器 -->
  <section class="todoapp">
    <!-- 头部 -->
    <Header v-model="todolist"  />
    <!-- 待办列表 -->
    <List v-model="todolist" v-model:filterTodos="filterTodos" />
    <!-- 底部 -->
    <Footer v-model="todolist" v-model:remaining="remaining" :visibility="visibility" @delete-completed-all="deleteCompletedAll" />
  </section>
</template>


<style scoped src="@/assets/todo.css"></style>
<style scoped>
.todoapp {
  background: #fff;
  margin: 130px auto;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 800px;
}
</style>