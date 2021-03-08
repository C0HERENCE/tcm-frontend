<template>
  <div class="row" style="margin-top: 3rem;    text-align: center">
    <div class="col-lg-3">
      <img src="../assets/index_tcm.png" height="100" width="100"/>
      <router-link to="tcmGuide">
        <h3>药材</h3>
      </router-link>
      <p>可通过导航浏览或者精确查找实现知识点快速定位，还可以通过知识点与文献的关联对具体内容进行深入研究。</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_cases.png" height="100" width="100"/>
      <router-link to="/casesGuide">
        <h3>药方</h3>
      </router-link>
      <p>疾病诊疗知识库对疾病病因、病机、临床表现、病症鉴别、诊断标准、治疗方法、治疗案例、疾病预防、等要点进行详述。</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_symptom.png" height="100" width="100"/>
      <router-link to="/symptomGuide">
        <h3>症状</h3>
      </router-link>
      <p>可通过相关病症在疾病诊疗知识库中快速定位，还可自动推送与某一具体疾病相关的其他信息，实现各知识点的融会贯通。</p>
    </div>
    <div class="col-lg-3">
      <img src="../assets/index_health.png" height="100" width="100"/>
      <router-link to="healthGuide">
        <h3>养生</h3>
      </router-link>
      <p>运用中医药理念，为用户提供身心保养、疾病预防、体质改善提供专业、便捷且释义详尽的知识服务和讨论平台</p>
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