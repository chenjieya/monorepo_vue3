<script setup lang="ts">
// 框架
import { computed }from 'vue'
// 组件
// 方法/类型
import type { ToolTipType } from './types'

const props = defineProps<{
  message: string,
  type: ToolTipType,
  flag: boolean
}>()

const iconType = computed(() => {
  if (props.type === "suc") {
    return "icon-chenggong";
  }
  if (props.type === "err") {
    return "icon-shibai";
  }
  if (props.type === "warn") {
    return "icon-jinggao";
  }
  return "icon-chenggong";
})

const animate = computed(() => {
  return props.flag ? "fade-in" : "fade-out";
})

</script>

<template>
  <div class="item" :class="[type, animate]">
    <i class="iconfont" :class="iconType"></i>
    <span style="margin-left: 7px">{{ message }}</span>
  </div>
</template>

<style scoped src="./iconfont/index.css"></style>
<style scoped>
.item {
  position: fixed;
  /* top: 500px; */
  left: 50%;
  transform: translate(-50%, 50px);
  padding: 8px 15px;
  min-width: 580px;
  border-radius: 5px;
  z-index: 100;
}

.suc {
  background-color: #162312;
  /* border-color: #274916; */
  border: 1px solid #49AA19;
  color: rgba(255,255,255,0.85);
  box-shadow: inset 0px 0px 9px 0px rgba(100, 168, 56, 0.6),
              inset 0px 0px 20px 0px rgba(100, 168, 56, 0.6);
  
  i {
    color: #49AA19;
  }
}

.err {
  background-color: #2A1215;
  border-color: #A61D24;
  color: rgba(255,255,255,0.65);
  box-shadow: inset 0px 0px 9px 0px rgba(166, 29, 36, 0.6),
            inset 0px 0px 20px 0px rgba(166, 29, 36, 0.6);
  i {
    color: #A61D24;
  }
}

.warn {
  background-color: #2B2111;
  border-color: #D89614;
  color: rgba(255,255,255,0.65);
  box-shadow: inset 0px 0px 9px 0px rgba(216,150,20,0.6),
            inset 0px 0px 20px 0px rgba(216,150,20,0.6);

  i {
    color: #D89614;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
    top: 30px;
  }
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    top: 0;
  }
  0% {
    opacity: 1;
    top: 30px;
  }
}
.fade-in {
  animation: fadeIn 0.5s forwards;
}

.fade-out {
  animation: fadeOut 0.5s forwards;
}
</style>