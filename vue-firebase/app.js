new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Vue'
    },
    methods: {
        greet(time) {
            return `Hello and good ${time} ${this.name}`
        }
    }
})