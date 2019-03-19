<template>
  <div id="app">
    <router-view/>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  top: 0;
  bottom: 0;
  margin:0;
  padding:0;
}
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
