<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <div>
    <!--<button @click="changeView0">MainPage</button>
    <button @click="changeView1">UserLogin</button>
    <button @click="changeView2">ChatAssistant</button>
    <button @click="changeView3">DataShown</button>
    <button @click="changeView4">注销登录（删除TOKEN）</button>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    changeView0: function () {
      this.$router.push({
        name: "main",
      });
    },
    changeView1: function () {
      this.$router.push({
        name: "login",
      });
    },
    changeView2: function () {
      this.$router.push({
        name: "assistant",
      });
    },
    changeView3: function () {
      this.$router.push({
        name: "datashown",
      });
    },
    changeView4: function () {
      window.Android.clearToken();
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
