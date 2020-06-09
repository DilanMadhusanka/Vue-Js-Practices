new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Vue'
    },
    methods: {
        greet() {
            return `Hello there ${this.name}`
        }
    }
})