new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Vue',
        coords: {
            x: 0,
            y: 0
        }
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
        }
    }
})