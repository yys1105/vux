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
    <cell :link="{name:'demo'}">
      <div slot="title">这是标题</div>
    </cell>
    <cell :border-intent="false" title="这也是标题"></cell>
    <cell></cell>
    <cell></cell>
  </group>
</template>

<style scoped>

</style>
