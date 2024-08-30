import { createApp } from 'vue'
import App from './App.vue'
import { log } from '@learn_vue3/commonShared'

console.log('xxxxx测试一下')

log.info('hello world')
log.warning('hello world')
log.error('hello world')
log.success('hello world')
log.picture('https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0514%2Fd0ea93ebj00sdgx56001xd200u000gtg00hz00a2.jpg&thumbnail=660x2147483647&quality=80&type=jpg')

createApp(App).mount('#app')
