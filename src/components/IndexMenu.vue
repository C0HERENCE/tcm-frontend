<template>
  <div class="row" style="margin-top: 3rem;    text-align: center">
    <div class="col-lg-3">
      <img src="../assets/index_tcm.png" height="100" width="100"/>
      <router-link to="/HerbGuide">
        <h3>{{$t("herb")}}</h3>
      </router-link>
      <p>{{$t("index.herb")}}</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_cases.png" height="100" width="100"/>
      <router-link to="/PrescriptionGuide">
        <h3>{{$t("prescription")}}</h3>
      </router-link>
      <p>{{$t("index.prescription")}}</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_symptom.png" height="100" width="100"/>
      <router-link to="/SymptomGuide">
        <h3>{{$t("symptom")}}</h3>
      </router-link>
      <p>{{$t("index.symptom")}}</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_health.png" height="100" width="100"/>
      <router-link to="HealthGuide">
        <h3>{{$t("health")}}</h3>
      </router-link>
      <p>{{$t("index.health")}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexMenu"
}
</script>

<style scoped>
h3{
  text-align: center;
  margin-top:1rem;
}
</style>