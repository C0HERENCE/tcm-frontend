<template class="p-1">
  <el-row type="flex">
      <el-col :span="18">
        <el-card class="p-2" v-if="herb.intro!=undefined">
          <h1>{{herb.intro.chineseName}}</h1>
          <p v-html="herb.intro.intro"></p>
        </el-card>
        <div class="p-2 article">
          <div v-for="(value, h2) in herb" :key="h2">
            <h2 :id="h2" v-if="h2 !== 'id' && h2 !== 'intro'">
              {{$t('herbDetail.'+h2)}}
            </h2>
            <div  v-if="h2 !== 'id' && h2 !== 'intro'">
              <div v-for="(p, h3) in value" :key="h3">
                <h3 v-if="p != undefined" :id="h3">{{$t('herbDetail.'+h3)}}</h3>
                <p v-if="p != undefined" v-html="p"></p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-card class="sticky-top p-1 m-1" style="text-align: left">
          <h5>{{$t("herbDetail.navigation")}}</h5>
          <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
            <b-nav pills vertical v-for="(value, h2) in herb" :key="h2">
              <a :id="h2" v-if="h2 !== 'id' && h2 !== 'intro'" :href="'#'+h2">
                {{$t('herbDetail.'+h2)}}
              </a>
              <div v-if="h2 !== 'id' && h2 !== 'intro'">
                <div v-for="(p, h3) in value" :key="h3">
                  <b-nav-item v-if="p != undefined" :id="h3" :href="'#'+h3">
                    {{$t('herbDetail.'+h3)}}
                  </b-nav-item>
                </div>
              </div>
            </b-nav>
          </b-navbar>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
import {getHerbById} from "@/api/herb";

export default {
  name: "HerbDetail",
  data() {
    return {
      herb:{}
    }
  },
  async mounted() {
    this.herb = await getHerbById(this.$route.params["id"])
  }
}
</script>

<style scoped>
.nav-link{
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>