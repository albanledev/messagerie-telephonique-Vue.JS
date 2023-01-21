<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/clavier">Clavier</router-link> |
    <router-link to="/contact">Contact</router-link>

  </nav>
  <router-view/>

  
</template>

<style>

html{
  overflow-x: hidden;
}
body{
  background-color: #003933;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #137F85
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
