<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
  import Layout from './components/layout'
  export default {
    name: 'app',
    components:{ Layout }
  }
</script>
<style lang="stylus">
  @import "/assets/styles/common.styl";
  #app{
    height 100%
  }
</style>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>

