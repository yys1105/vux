<script>
  export default {
    name: 'group',
    props:{
      title:String,
      titleColor:String,
      labelWidth:String,
      labelMarginRight:String,
      gutter:[String,Number]
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div>
    <div class="meui-cells__title"
         v-if="title"
         :style="{color:titleColor}"
         v-html="title">
    </div>
    <div class="meui-cells"
         :class="{'me-no-group-title':!title}"
         :style="{marginTop:typeof gutter==='number'?(gutter+'px'):gutter}">
      <slot>

      </slot>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "../styles/variable.styl"
  .meui-cells__title
    margin-top group-title-margin-top
    margin-bottom group-title-margin-bottom
    padding-left meuiCellGapH
    padding-right meuiCellGapH
    color meuiTextColorGray
    font-size cell-tips-font-size
    &+.meui-cells
      margin-top 0
  .meui-cells
    margin-top meuiCellMarginTop
    background-color meuiCellBg
    line-height meuiCellLineHeight
    font-size meuiCellFontSize
    overflow hidden
    position relative
    &:before
      setTopLine()
    &:after
      setBottomLine()
  .me-no-group-title
    margin-top group-title-margin-top
</style>
