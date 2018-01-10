<script>
  import ViewBox from '../../lib/meui/components/view-box'
  import MeHeader from '../../lib/meui/components/me-header'
  export default {
    name: '',
    components:{ ViewBox,MeHeader },
    data() {
      return {}
    },
    methods:{}
  }
</script>

<template>
  <view-box>
    <me-header slot="header"></me-header>
    <router-view class="router-view"/>
  </view-box>
</template>

<style scoped lang="stylus">
  .router-view
    width 100%
</style>
