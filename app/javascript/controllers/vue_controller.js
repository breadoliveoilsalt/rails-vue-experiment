import * as Vue from "vue"
import MyComponent from '../components/my_component.js'

console.log('Made it to here')
console.log('import seems to be working')

const entryPoint = "#app"
// const app = Vue.createApp({
//     data() {
//         return { count: 1 }
//     },
//     template: `<div>count is {{ count }}</div>`,
//     created() {
//         console.log("count is: " + this.count) // => "count is: 1"
//     }
// })
// app.mount(entryPoint)
Vue.createApp(MyComponent).mount(entryPoint)