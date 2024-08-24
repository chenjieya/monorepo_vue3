<script setup lang="ts">
// 框架
// 组件
// 方法/类型
import { ToDoListItem } from '@/types/index'
import { ref } from 'vue';

const model = defineModel<ToDoListItem[]>()
const filterTodos = defineModel<ToDoListItem[]>('filterTodos')

// 存储当前正在编辑的事项
const editedToDo = ref()
// 缓存编辑之前的标题，以便于在取消编辑的时候恢复
let beforeEditCatch = ''

// 移除某一项
const deleteTodo = (todo: ToDoListItem) => {
  if(window.confirm("确定要删除该待办事项吗？")) {
    model.value.splice(model.value.indexOf(todo), 1)
  } else{
    if(beforeEditCatch) {
      todo.title = beforeEditCatch
      beforeEditCatch = ''
    }
  }
}

// 编辑
const editToDo = (todo: ToDoListItem) => {
  editedToDo.value = todo
  beforeEditCatch = todo.title
}

const doneEdit = (todo: ToDoListItem) => {
  if(editedToDo.value) {
    editedToDo.value = undefined
    todo.title = todo.title.trim()
    if(!todo.title) deleteTodo(todo)
  }

}

const cancelEdit = (todo: ToDoListItem) => {
  editedToDo.value = undefined
  todo.title = beforeEditCatch
  beforeEditCatch = ''
}
</script>

<template>
  <section class="main">
    <!-- 全选按钮 -->
    <input type="checkbox" id="toggle-all" class="toggle-all" />
    <label for="toggle-all">全部完成</label>
    <!-- 待办事项列表 -->
    <ul class="todo-list">
      <li
        v-for="todo in filterTodos"
        :key="todo.id"
        class="todo"
        :class="{
          completed: todo.completed,
          editing: todo === editedToDo
        }"
      >
        <div class="view">
          <input type="checkbox" class="toggle" v-model="todo.completed" />
          <label @dblclick="editToDo(todo)">{{ todo.title }}</label>
          <button class="destroy" @click="deleteTodo(todo)"></button>
        </div>
        <!-- 编辑框 -->
        <input
          v-model="todo.title"
          type="text"
          class="edit"
          v-if="todo === editedToDo"
          @keyup.enter="doneEdit(todo)"
          @blur="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
          @vue:mounted="({ el }) => el.focus()"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped src="./list.css"></style>
