<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
        <br />
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs',
            posts: []
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
        axios.get('https://jsonplaceholder.typicode.com/postss')
        .then(response => {
            console.log(response)
            this.posts = response.data
        })
        .catch(err => {
            console.log(err)
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