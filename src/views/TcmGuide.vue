<template>
  <b-row style="margin-top: 1.4rem">
    <b-col cols="3">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中药材分类</span>
        </div>
        <el-input class="m-1"
                  placeholder="输入关键词筛选分类"
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
<!--      面包屑导航-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form :inline="true" class="form-inline" size="small">
        <div style="margin: 1rem auto 0;">
          <el-form-item>
            <el-input placeholder="在此类下查询"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" disabled>高级查询</el-button>
          </el-form-item>
        </div>
      </el-form>

    </b-col>
  </b-row>
</template>

<script>
import {getTcmCategories} from "@/api/category";

export default {
  name: "TcmGuide",
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
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