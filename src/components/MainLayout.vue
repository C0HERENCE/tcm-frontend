<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <IndexBanner v-if="$route.path==='/'"></IndexBanner>
    <SubpagesBanner v-else></SubpagesBanner>
    <b-container class="upper-part">
      <router-view/>
    </b-container>
    <MainFooter class="footer"></MainFooter>
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar";
import MainFooter from "@/components/MainFooter";
import IndexBanner from "@/components/IndexBanner";
import SubpagesBanner from "@/components/SubPagesBanner";
export default {
  name: "MainLayout",
  components: {SubpagesBanner, IndexBanner, MainFooter, TopNavBar}
}
</script>

<style scoped>
.upper-part
{
  padding-bottom:4em;
}
.footer{
  bottom: 0;
  width:100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}

</style>