<template>
  <div>
    <h6>{{$t('subpages.initialNav')}}</h6>
    <el-radio-group v-model="selectedInitial">
      <el-radio :label="'All'">{{$t('subpages.all')}} ({{totalCount}})</el-radio>
      <el-radio v-for="tag in result" :key="tag.initial" :label="tag.initial">
        {{tag.initial}} ({{tag.data.length}})
      </el-radio>
    </el-radio-group>
    <b-list-group-item v-for="re in displayResult" :key="re.initial">
      <h6>{{re.initial}}</h6>
      <pop-over-card v-for="d in re.data" :key="d.id" :text="d.chineseName" :id="d.id"></pop-over-card>
    </b-list-group-item>
  </div>
</template>

<script>
import {SearchInSubPage} from "@/api/search";
import PopOverCard from "@/components/PopoverCard";

export default {
name: "FilterResult",
  components: {PopOverCard},
  data() {
    return {
      Keywords: '',
      totalCount: 0,
      result: [],
      displayResult: [],
      selectedInitial: 'All'
    }
  },
  props: {
    Type: {
      type: Number,
      default: 0
    },
    CategoryId: {
      type: Number,
      default: 0
    }
  },
  watch: {
    CategoryId(newValue) {
      this.Search(this.Type, newValue, this.Keywords)
    },
    Keywords(newValue) {
      this.Search(this.Type, this.CategoryId, newValue)
    },
    selectedInitial(newValue) {
      if (newValue === 'All')
        this.displayResult = this.result;
      else
        this.displayResult = [this.result.find(n=>n.initial === newValue)];
    }
  },
  methods: {
    async Search(type, categoryId, keywords) {
      let response = await SearchInSubPage({type, categoryId, keywords});
      console.log(response)
      this.totalCount = response.total;
      this.result = response.result;
      this.displayResult = this.result;
    }
  },
}
</script>

<style scoped>

</style>