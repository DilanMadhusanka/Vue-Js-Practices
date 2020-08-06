<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'About'}">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
}
a {
    color: #43b983;
}
</style>