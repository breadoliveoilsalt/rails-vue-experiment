import * as Vue from "vue"

console.log('Made it to here')

const entryPoint = "#app"
const app = Vue.createApp({
    data() {
        return { count: 1 }
    },
    template: `<div>count is {{ count }}</div>`,
    created() {
        console.log("count is: " + this.count) // => "count is: 1"
    }
})
app.mount(entryPoint)