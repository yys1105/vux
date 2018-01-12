<script>
  export default {
    name: 'inline-desc'
  }
</script>

<template>
  <span class="me-label-desc">
    <slot></slot>
  </span>
</template>

<style scoped lang="stylus">
  @import "../styles/variable.styl"
  .me-label-desc
    font-size 14px
    color #666
</style>
