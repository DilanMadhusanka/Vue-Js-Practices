<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Blogs />
  </div>
</template>

<script>

import Blogs from './components/Blogs'

export default {
  name: "app",
  components: {
    Blogs
  },
  data() {
    return {
      title: "My first Vue app, wooo :)",
    };
  },
  methods: {
    
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
