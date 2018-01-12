<script>
  export default {
    name: 'view-box',
    props:{
      bodyPaddingTop:{
        type:String
      },
      bodyPaddingBottom:{
        type:String
      }
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div class="meui-tab">
    <slot name="header"></slot>
    <div class="meui-tab__panel"
         ref="viewBoxBody"
         :style="{paddingTop:bodyPaddingTop,paddingBottom:bodyPaddingBottom}">
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<style scoped lang="stylus">
  @import "../styles/variable.styl"
  .meui-tab
    position relative
    height 100%
  .meui-tab__panel
    box-sizing border-box
    height 100%
    /*padding-bottom 50px*/
    overflow auto
    overflow-scrolling touch
</style>
