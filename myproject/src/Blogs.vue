<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs'
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    beforeCreate() {
        alert('beforeCreate hook')
    },
    created() {
        alert('created hook')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(respose => {
            console.log(respose)
        })
    },
    beforeUpdate() {
        alert('beforeUpdate hook')
    },
    updated() {
        alert('updated hook')
    }
}
</script>