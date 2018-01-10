<script>
  import objectAssign from 'object-assign'

  export default {
    name: 'me-header',
    props: {
      leftOptions: {
        type: Object
      },
      title: {
        type: String
      },
      transition: {
        type: String
      },
      rightOptions: {
        type: Object,
        default () {
          return {
            showMore: true
          }
        }
      },
      fixed:{
        type:Boolean,
        default:true
      }
    },
    data() {
      return {
        shouldOverWriteTitle: false
      }
    },
    computed: {
      leftOptionsAssign() {
        return objectAssign({
          showBack: true,
          preventGoBack: false
        }, this.leftOptions || {})
      }
    },
    beforeMount() {
      if (this.$slots['overwrite-title']) {
        this.shouldOverWriteTitle = true
      }
    },
    methods:{
      onClickBack(){
        if(this.leftOptionsAssign.preventGoBack){
          this.$emit('on-click-back')
        }else{
          this.$router?this.$router.go(-1):window.history.back()
        }
      }
    }
  }
</script>

<template>
  <div :class="{'fixed-header':fixed}">
    <div class="me-header">
      <div class="me-header-left">
        <slot name="overwrite-left">
          <a class="me-header-back"
             @click.preventDefault
             v-show="leftOptionsAssign.showBack"
             @click="onClickBack">
            {{ typeof leftOptionsAssign.backText === 'undefined' ? '返回' : leftOptionsAssign.backText}}
          </a>
          <div class="left-arrow"
               @click="onClickBack"
               v-show="leftOptionsAssign.showBack">
          </div>
        </slot>
        <slot name="left"></slot>
      </div>
      <div class="me-header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
        <slot>
          <span v-show="title">{{ title }}</span>
          <span v-show="!title">未定义菜单</span>
        </slot>
      </div>
      <div class="me-header-title-area" v-if="shouldOverWriteTitle">
        <slot name="overwrite-title"></slot>
      </div>
      <div class="me-header-right">
        <a class="me-header-more"
           @click.preventDefault
           v-if="rightOptions.showMore" @click="$emit('on-click-more')"></a>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  @import "../styles/variable.styl"
  .fixed-header
    position sticky
    top 0
    left 0
    z-index 99
    width 100%
  .me-header
    position relative
    box-sizing border-box
    background-color header-background-color
    padding 3px 0
  .me-header .me-header-title
    line-height 40px
    text-align center
    font-size 18px
    font-weight 400
    color header-title-color

  .me-header-title-area,
  .me-header .me-header-title
    margin 0 88px
    height 40px
    width auto
    overflow hidden
    text-overflow ellipsis
    white-space nowrap

  .me-header .me-header-title > span
    display inline-block

  .me-header .me-header-left,
  .me-header .me-header-right
    position absolute
    top 14px
    display block
    font-size 14px
    line-height 21px
    color header-title-color
  .me-header .me-header-left a,
  .me-header .me-header-left button,
  .me-header .me-header-right a,
  .me-header .me-header-right button
    float left
    margin-right 8px
    color header-text-color
  .me-header .me-header-left
    left 18px
  .me-header .me-header-left .me-header-back
    padding-left 16px
  .me-header .me-header-left .left-arrow
    position absolute
    width 30px
    height 30px
    top -5px
    left -5px
    &:before
      content ''
      position absolute
      width 12px
      height 12px
      border 1px solid header-arrow-color
      border-width 1px 0 0 1px
      transform rotate(-45deg)
      top 8px
      left 7px
  .me-header .me-header-right
    right 15px
  .me-header .me-header-right .me-header-more:after
    content:'\2022\0020\2022\0020\2022\0020'
    font-size 16px
</style>
