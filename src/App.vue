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

html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app{
  height: 100%;
}
.bg-color {
  background: #1A3E67;
}
.health{
  line-height: .5em;
}

</style>
