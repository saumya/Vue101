<template>
  <div id="app">
    <div> Yay! </div>
    <HelloWorld msg="Nice!" />

    <router-link :to="{ name:'HelloWorld', params:{ msg:'YoYoYo!'} }">Home</router-link>
    <router-link to="/one">First</router-link>
    <router-link to="/two">Second</router-link>

    <div> =============== Below Only ! =============== </div>
    <router-view></router-view>  
    <div> =============== Above Only ! =============== </div>  

  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld: HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
  margin-left: 1em;
  margin-left: 1em;
}
</style>
