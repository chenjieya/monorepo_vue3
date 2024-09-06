/**
 * 函数式组件
 */
import { type FunctionalComponent, ref, h } from 'vue'

type FComponentProps = {
  testName?: string
}

type Events = {
  sendMessage: (count: number) => void
}

export const useFuncButton = () => {
  const count = ref(0)
  const updateCount = () => {
    count.value++
  }

  const TextComp: FunctionalComponent = () => {
    return h('div', { style: { 'font-weight': 'bold' } }, count.value)
  }

  const ButtonComp: FunctionalComponent<FComponentProps, Events> = (_props, { emit, slots }) => {
    return h(
      'div',
      null,
      h(
        'button',
        {
          onClick: () => {
            updateCount()
            emit('sendMessage', count.value)
          }
        },
        slots.default?.()
      )
    )
  }

  // 如果不这样写，就不会处理驼峰和短斜线之间的写法转换
  ButtonComp.props = ['testName']
  ButtonComp.emits = ['sendMessage']

  return [TextComp, ButtonComp]
}
