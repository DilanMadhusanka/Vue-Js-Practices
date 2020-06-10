new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        wage: 10
    },
    methods: {
        greet(time) {
            return `Hello and good ${time} ${this.name}`
        }
    }
})