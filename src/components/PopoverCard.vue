<template>
    <el-popover width="400" trigger="hover" :open-delay="800" placement="top" :title="$t('card.title')" @show="showMethod">
      {{id}}
      <router-link :to="{path: '/herbDetail/'+ id}" slot="reference">
        <el-link class="mx-2" >{{text}}</el-link>
      </router-link>
    </el-popover>
</template>

<script>
export default {
name: "PopOverCard",
  props: {
    id: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    showMethod() {

    }
  },
}
</script>

<style scoped>

</style>