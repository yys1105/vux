<script>
  import InlineDesc from '../inline-desc'
  import { go } from '../../libs/router'
  export default {
    name: 'Cell',
    components: { InlineDesc },
    props: {
      title: {
        type:String,
        default:'未定义'
      },
      value: String,
      inlineDesc: String,
      link: [String, Object],
      isLink: {
        type: Boolean,
        default: false
      },
      primary: {
        type: String,
        default: 'title'
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      valueAlign: {
        type: String,
        default: 'right'
      },
      borderIntent: {
        type: Boolean,
        default: true
      },
      arrowDirection: String,
      disabled: Boolean,
      alignItems: {
        type: String,
        default: 'center'
      }
    },
    data() {
      return {
        hasTitleSlot:true
      }
    },
    computed:{
      style(){
        if(this.alignItems){
          return {
            alignItems:this.alignItems
          }
        }
      },
      valueClass() {
        return {
          'meui-cell-primary':this.primary === 'content' || this.valueAlign === 'left',
          'meui-cell-align-left':this.valueAlign==='left',
          'meui-cell-arrow-transition':!!this.arrowDirection,
          'meui-cell-arrow-up':this.arrowDirection === 'up',
          'meui-cell-arrow-down':this.arrowDirection === 'down',
        }
      }
    },
    methods:{
      onClick(){
        !this.disabled && go(this.link,this.$router)
      }
    },
    beforeMount(){
      this.hasTitleSlot = !!this.$slots.title
    }
  }
</script>

<template>
  <div class="meui-cell"
       :class="{'meui-tap-active': isLink || !!link,'meui-cell_access': isLink || !!link,'meui-cell-no-border-intent': !borderIntent,'meui-cell-disabled': disabled}"
       :style="style"
       @click="onClick">
    <div class="meui-cell__hd">
      <slot name="icon">
      </slot>
    </div>
    <div class="meui-cell-bd"
         :class="{'meui-cell-primary':primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="meui-label"
               v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </inline-desc>
    </div>
    <div class="meui-cell__ft"
         :class="valueClass">
      <slot>{{ value }}</slot>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<style scoped lang="stylus">
  @import "../styles/variable.styl"
  .meui-cell-primary
    flex 1
  .meui-label
    display block
    word-wrap break-word
    word-break break-all
  .meui-cell
    padding meuiCellGapV meuiCellGapH
    position relative
    display flex
    align-item center
    &:before
      setTopLine(meuiCellBorderColor)
      left meuiCellGapH
    &:first-child
      &:before
        display none
  .meui-cell.meui-cell-no-border-intent:before
    left 0
  .meui-cell-disabled
    .meui-label
      color #b2b2b2
    &.meui-cell-access .meui-cell__ft:after
      border-color cell-disabled-arrow-color
  .meui-cell__ft
    text-align right
    color meuiTextColorGray
  .meui-cell__ft.meui-cell-align-left
    text-align:left
  .meui-cell_access .meui-cell__ft.meui-cell-arrow-up:after
    transform matrix(.71,.71,-.71,.71,0,0) rotate(-90deg)
  .meui-cell_access .meui-cell__ft.meui-cell-arrow-down:after
    transform matrix(.71,.71,-.71,.71,0,0) rotate(90deg)
</style>
