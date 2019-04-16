<template>
  <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="warnning">

    <el-row>
      <Top_bar :who="now"></Top_bar>
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1" style="margin-top: -2em;" id="content">
        <el-row>
          <el-col :span="2" :offset="21">
            <el-button @click="clearfilter" type="primary" round>清除过滤器</el-button>
          </el-col>
        </el-row>
        <el-table ref="filtertable" :data="warn_data.filter(data => !search || data.host.toLowerCase().includes(search.toLowerCase()))" :span-method="objectSpanMethod" style="width: 100%">

          <el-table-column prop="severity" label="严重性" sortable column-key="severity" :filters="[{text:'警告',value:'警告'},{text:'正常',value:'正常'}]" :filter-method="filterhandler"></el-table-column>
          <el-table-column prop="date" label="修改时间" ></el-table-column>
          <el-table-column prop="host" label="主机"></el-table-column>
          <el-table-column prop="qname" label="问题名称"></el-table-column>
          <el-table-column prop="detail" label="确认明细"></el-table-column>
          <el-table-column prop="num" label="事件序号"></el-table-column>
          <el-table-column prop="sure" label="状态" sortable column-key="sure" :filters="[{text:'已确认',value:'已确认'},{text:'未确认',value:'未确认'}]" :filter-method="filtertag" filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag :type="scope.row.sure==='已确认'?'success':'warning'">{{scope.row.sure}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" placeholder="输入主机名" />
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    import Top_bar from "../share/top_bar";
    export default {
        name: "warnning",
      components: {Top_bar},
      data(){
          return{
            now:'警告管理',
            search:'',
            warn_data:[
              {severity:'警告',date:'2019-4-1',host:'node1',qname:'集群总体状态异常',detail:'异常状态为1',num:'0001',sure:'已确认'},
              {severity:'警告',date:'2019-3.31',host:'node2',qname:'集群总体状态异常',detail:'异常状态为2',num:'0002',sure:'未确认'},
              {severity:'正常',date:'2019-3-30',host:'node1',qname:'集群总体状态异常',detail:'异常状态为3',num:'0003',sure:'已确认'},
              {severity:'正常',date:'2019-3-29',host:'node3',qname:'集群总体状态异常',detail:'异常状态为4',num:'0004',sure:'已确认'},
              ]
          }
      },
      mounted(){
        // var _this=this
        // this.$axios.get('').then(res=>{
        //   _this.warn_data=res
        // }).catch(error=>{
        //   console.log(error)
        // })
      },
      methods:{
        clearfilter() {
          this.$refs.filtertable.clearFilter();
        },
        filterhandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },
        filtertag(value, row) {
          return row.sure === value;
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 7) {
              return {
                rowspan: columnIndex,
                colspan: 1
              };
          }
        }
      }
    }
</script>

<style scoped>
  #warnning{
    height: 100%;
    background-color: #EBECF1;
  }
  #content{
    background-color: white;
    border-radius: .5em;
    padding: 1em;
  }
</style>
