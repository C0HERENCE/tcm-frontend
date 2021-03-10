<template>
  <div>
    <b-row>
      <b-col class="home-banner"></b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col>
          <b-nav tabs fill class="navWrap">
            <b-nav-item to="/">{{$t("indexNav")}}</b-nav-item>
            <b-nav-item to="/HerbGuide" :active="$route.path.toLowerCase()==='/HerbGuide'.toLowerCase()">{{$t("herb")}}</b-nav-item>
            <b-nav-item to="/PrescriptionGuide" :active="$route.path.toLowerCase()==='/PrescriptionGuide'.toLowerCase()">{{$t("prescription")}}</b-nav-item>
            <b-nav-item to="/SymptomGuide" :active="$route.path.toLowerCase()==='/SymptomGuide'.toLowerCase()">{{$t("symptom")}}</b-nav-item>
            <b-nav-item to="/HealthGuide" :active="$route.path.toLowerCase()==='/HealthGuide'.toLowerCase()">{{$t("health")}}</b-nav-item>
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
  padding: 0;
}

</style>