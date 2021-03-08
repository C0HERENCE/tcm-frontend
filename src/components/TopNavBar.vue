<template>
  <div>
    <b-navbar toggleable="lg" variant="light">
      <b-container>
        <b-navbar-brand href="#">中医药知识科普平台</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Language" right>
              <b-dropdown-item href="#">中文</b-dropdown-item>
              <b-dropdown-item href="#">英语</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNavBar"
}
</script>

<style scoped>

</style>