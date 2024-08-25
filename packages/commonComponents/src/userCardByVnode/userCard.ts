import { defineComponent, h } from "vue";
import styles from './userCard.module.css'

export default defineComponent({
    name: 'UserCardByVnode',
    props: {
        name: String,
        email: String,
        avatarUrl: String
    },
    setup(props) {
        return () => h('div', {
            class: styles.userCard
        },[
            h('img', {src: props.avatarUrl, alt: "图片失效", class: styles.avatar}),
            h('div', {class: styles.userInfo}, [
                h('h2', props.name),
                h('p', props.email)
            ])
        ])
    }
})