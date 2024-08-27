import { defineComponent, createApp, h, Teleport, ref } from 'vue'
import toast from './index.vue';

/**
 * 继承父组件
 * @param {Object} param0 消息框信息 param1 消息框类型 suc err warn
 * @param {*} duration 间隔时间
 */
export default function ({ message, type }: {message: string, type: string}, duration: number = 3000) {
  const flag = ref(true);
  const app = createApp(defineComponent({
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
    // 关闭弹框
    flag.value = false;
  }, duration-500)
  setTimeout(() => {
    // 销毁组件
    app.unmount();
  }, duration)
}