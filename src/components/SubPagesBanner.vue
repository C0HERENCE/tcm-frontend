<template>
  <div>
    <b-row>
      <b-col class="home-banner"></b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col>
          <b-nav tabs fill class="navWrap">
            <b-nav-item to="/">首页</b-nav-item>
            <b-nav-item to="/tcmGuide" :active="$route.path.toLowerCase()==='/tcmguide'">药材</b-nav-item>
            <b-nav-item to="/casesGuide" :active="$route.path.toLowerCase()==='/casesguide'">药方</b-nav-item>
            <b-nav-item to="/symptomGuide" :active="$route.path.toLowerCase()==='/symptomguide'">症状</b-nav-item>
            <b-nav-item to="/healthGuide" :active="$route.path.toLowerCase()==='/healthguide'">养生</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
name: "SubpagesBanner"
}
</script>

<style scoped>
.navWrap{
  margin: 0 auto;
  background: url(../assets/navbg.png) 100% 100%;
  border-bottom: 2px solid #640000;
}
.home-banner {
  font-family: microsoft yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,0,0,0);
  word-break: break-all;
  width: 100%;
  height: 230px;
  overflow: hidden;
  background-size: cover;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: url(../assets/img.png) no-repeat;
  background-position-x: center;
}

</style>