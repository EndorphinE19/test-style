<template>
  <div id="app">
      <widget-time
      @loading="isLoading = $event" />
      <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
import WidgetTime from './components/widget-time'

export default {
  name: 'App',
  data() {
    return {
      isFullPage: true,
      isLoading: false
    }
  },
  components: {
    WidgetTime
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
