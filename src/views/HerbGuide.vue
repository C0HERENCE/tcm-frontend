<template>
  <b-row style="margin-top: 1.4rem">
    <b-col cols="3">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{$t("subpages.herbCategoryTitle")}}</span>
        </div>
        <el-input class="m-1"
                  :placeholder="$t('subpages.filter')"
                  v-model="filterText">
        </el-input>
        <el-tree :expand-on-click-node="false" ref="tree"
                 accordion
                 :data="data" :props="defaultProps"
                 :filter-node-method="filterNode"
                 @node-click="handleNodeClick"></el-tree>
      </el-card>
    </b-col>
    <b-col cols="9">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">{{$t("indexNav")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('herb')}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="selectedCategoryName !=='' && selectedCategoryId !== 0">{{selectedCategoryName}}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form :inline="true" class="form-inline" size="small">
        <div style="margin: 1rem auto 0;">
          <el-form-item>
            <el-input :placeholder="$t('subpages.searchHint')" v-model="keyword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="setKeyword">{{$t("subpages.search")}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" disabled>{{$t("subpages.advancedSearch")}}</el-button>
          </el-form-item>
        </div>
      </el-form>
      <FilterResult :category-id="selectedCategoryId" :Type="1" ref="result"></FilterResult>
    </b-col>
  </b-row>
</template>

<script>
import {getTcmCategories} from "@/api/category";
import FilterResult from "@/components/FilterResult";

export default {
  name: "TcmGuide",
  components: {FilterResult},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      keyword: '',
      filterText: '',
      selectedCategoryId: 0,
      selectedCategoryName: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      this.selectedCategoryId = data.id;
      this.selectedCategoryName = data.label;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    setKeyword() {
      this.$refs.result.Keywords = this.keyword;
    }
  },
  mounted() {
    getTcmCategories().then(response => {
      this.data = response;
    })
  }
}
</script>

<style scoped>
.form-inline{
  padding: 10px;
}
</style>