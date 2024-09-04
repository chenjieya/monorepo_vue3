import { defineComponent, createApp, h, Teleport, ref } from 'vue'
import type { App } from 'vue'
import toast from './index.vue';

import type { ToolTipType } from './types'

/**
 * 继承父组件
 * @param {Object} param0 消息框信息 param1 消息框类型 suc err warn
 * @param {*} duration 间隔时间
 */
let app: App | null
let unTimer: ReturnType<typeof setTimeout>
export default function ({ message, type }: {message: string, type: ToolTipType}, duration: number = 3000) {

  // 控制消息提示框的显示隐藏
  const flag = ref(true);

  // 销毁前一个弹出框
  if(app && unTimer) {
    clearTimeout(unTimer)
    app.unmount()
  }

  app = createApp(defineComponent({
    setup() {
      return () => h(Teleport, {to: 'body'}, h(toast, {
        message,
        type,
        flag: flag.value
      }))
    }
  }));

  const componentElement = document.createElement('div');
  app.mount(componentElement);
  // 完善时间
  if (duration < 2000) {
    duration = 2000;
  }
  setTimeout(() => {
    // 关闭弹框，不要在销毁的时候关闭弹框。过渡动画会消失
    flag.value = false;
  }, duration-500)

  unTimer = setTimeout(() => {
    // 销毁组件
    app?.unmount();
  }, duration)
}