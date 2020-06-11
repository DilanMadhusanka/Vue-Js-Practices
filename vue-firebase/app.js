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
        items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star']
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