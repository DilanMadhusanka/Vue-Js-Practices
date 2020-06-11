new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Vue',
        coords: {
            x: 0,
            y: 0
        },
        showName: false,
        showAge: true,
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            { name: 'Crystal', age: 25, belt: 'Black'},
            { name: 'Ryu', age: 30, belt: 'Brown'},
            { name: 'Ken', age: 35, belt: 'Orange'},
        ]
    },
    methods: {
        logEvent(e) {
            console.log(e)
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e) {
            this.name = e.target.value
        },
        logMessage() {
            console.log("Hello world")
        },
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    }
})