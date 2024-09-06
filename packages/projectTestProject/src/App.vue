<script setup lang="ts">
import { h } from 'vue'
import {
  VNode,
  UserCardByVnode,
  Message,
  TestButton,
  useFuncButton
} from '@learn_vue3/commonComponents'

const v = h(VNode, {
  name: '李四',
  email: '176@163.com'
})
console.log('vnode:', v)

setTimeout(() => {
  Message({
    type: 'suc',
    message: '成功啦，还有谁'
  })
}, 3000)

setTimeout(() => {
  Message({
    type: 'suc',
    message: '成功啦, 还有谁xxxx'
  })
}, 4000)

const [TextComp, ButtonComp] = useFuncButton()
</script>

<template>
  <div class="app-container">
    <h1>这是App组件</h1>
    <VNode name="张三" email="188@163.com" />
    <!-- 渲染vnode,通过component使用虚拟dom -->
    <!-- <component :is="v" /> -->
    <v />

    <!-- 使用js写组件 -->
    <UserCardByVnode
      name="chenjie"
      email="188@163.com"
      avatar-url="https://img1.baidu.com/it/u=1333417867,4012964063&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1714410000&t=91fec948b29aa1f04cd55cb867ccb757"
    />

    <!-- 测试按钮 -->
    <TestButton>
      <div>chenjie</div>
    </TestButton>

    <!-- 测试函数式组件 -->
    <TextComp></TextComp>
    <ButtonComp test-name="陈姐">+1</ButtonComp>
  </div>
</template>

<style scoped>
.app-container {
  width: 400px;
  border: 1px solid;
}
</style>
