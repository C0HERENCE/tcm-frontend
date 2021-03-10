<template>
  <div>
    <b-navbar toggleable="lg" variant="light">
      <b-container>
        <b-navbar-brand href="#">{{$t('title')}}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Language" right>
              <b-dropdown-item href="#" @click="changeLang">中文简体</b-dropdown-item>
              <b-dropdown-item href="#" @click="changeLang">English(US)</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNavBar",
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale==='enUs' ? 'zhCn' : 'enUs'
    }
  },
}
</script>

<style scoped>

</style>