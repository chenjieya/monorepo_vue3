<script setup lang="ts">
// 框架
// 组件
// 方法/类型
defineProps({
    name: String,
    email: String
})
</script>

<template>
  <div class="child-container">
    <h3>这是子组件</h3>
    <p>姓名: {{ name }}</p>
    <p>email: {{ email }}</p>
  </div>
</template>

<style scoped>
.child-container {
    width: 200px;
    height: 200px;
    border: 1px solid;
}
</style>