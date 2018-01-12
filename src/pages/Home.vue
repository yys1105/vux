<script>
  import Group from '../lib/meui/components/group'
  import Cell from '../lib/meui/components/cell'
  export default {
    name: '',
    components:{ Group,Cell },
    data() {
      return {}
    }
  }
</script>

<template>
  <group title="默认标题">
    <cell></cell>
    <cell title="左边标题"
          value="右侧标题"
          inline-desc="副标题"
          :link="{name:'inputPage'}">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          is-link>
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :is-link="false">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :is-link="false"
          primary="content">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          value-align="left">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :border-intent="false">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :border-intent="false">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :border-intent="false"
          is-link
          arrow-direction="up">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          :border-intent="false"
          is-link
          arrow-direction="down">
    </cell>
    <cell title="左边标题"
          value="右侧标题"
          is-link
          :border-intent="false"
          :disabled="true">
    </cell>
    <cell title="左边标题"
          value="右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题右侧标题"
          primary="content">
    </cell>
    <cell primary="title">
      <span slot="title">slot左边标题</span>
      <span slot="icon" class="iconfont icon-wenjianjia1"></span>
      <slot>slot内容</slot>
      <div slot="inline-desc">标题右侧内容</div>
    </cell>
  </group>
</template>

<style scoped>

</style>
