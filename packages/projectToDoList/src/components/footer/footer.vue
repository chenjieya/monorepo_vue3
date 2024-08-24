<script setup>
// 框架
// 组件
// 方法/类型
import { ToDoListStatus } from '@/enum/index'

defineProps({
  visibility: ToDoListStatus
})

const model = defineModel()
const remaining = defineModel('remaining')

const emits = defineEmits(['deleteCompletedAll'])

/** 删除全部已完成 */
const deleteCompleted = () => {
  emits('deleteCompletedAll')
}
</script>

<template>
  <footer class="footer">
    <span class="todo-count">
      <span>剩余 {{ remaining }} 项</span>
    </span>
    <ul class="filters">
      <li>
        <a
          :href="`#/${ToDoListStatus.ALL}`"
          :class="{
            selected: visibility === ToDoListStatus.ALL
          }"
          >全部</a
        >
      </li>
      <li>
        <a
        :class="{
            selected: visibility === ToDoListStatus.ACTIVE
          }"
          :href="`#/${ToDoListStatus.ACTIVE}`"
          >未完成</a
        >
      </li>
      <li>
        <a
        :class="{
            selected: visibility === ToDoListStatus.COMPLETED
          }"
          :href="`#/${ToDoListStatus.COMPLETED}`"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="deleteCompleted" v-show="model.length > remaining">
      清除已完成
    </button>
  </footer>
</template>

<style scoped src="./footer.css"></style>
