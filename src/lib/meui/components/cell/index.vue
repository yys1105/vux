<script>
  import { go } from '../../libs/router'
  export default {
    name: 'Cell',
    components: {},
    props: {
      title: String,
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
        default: 'left'
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
       :class="{'me-tap-active': isLink || !!link,'me-cell_access': isLink || !!link,'me-cell-no-border-intent': !borderIntent,'me-cell-disabled': disabled}"
       :style="style"
       @click="onClick">
    <div class="meui-cell__hd">
      <slot name="icon">
        <i class="iconfont icon-wenjianjia1"></i>
      </slot>
    </div>
    <div class="meui-cell-bd"
         :class="{'meui-cell-primary':primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="meui-label"
               v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title">
          标题后内容
        </slot>
      </p>
    </div>
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
  .meui-cell.me-cell-no-border-intent:before
    left 0
  .meui-cell-disabled
    .meui-label
      color #b2b2b2
    &.meui-cell-access .meui-cell__ft:after
      border-color cell-disabled-arrow-color
</style>
