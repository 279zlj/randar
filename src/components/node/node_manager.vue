<template>
  <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="node_manager">
    <top_bar :who=now></top_bar>
    <el-row>
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1" style="margin-top: -2em;">

        <el-table :data="manager_data.slice((currpage - 1) * pagesize, currpage * pagesize)" height="500" style="width: 100%;border-radius: .5em;padding: 1em">
          <el-table-column prop="node" label="节点"></el-table-column>
          <el-table-column prop="manager" label="管理IP"></el-table-column>
          <el-table-column prop="detail" label="描述"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="cluster_status" label="集群状态"></el-table-column>
          <el-table-column prop="auth" label="认证状态"></el-table-column>
          <el-table-column prop="rest" label="剩余天数（天）"></el-table-column>
          <el-table-column
            label="操作"
            width="250">
            <template slot-scope="scope">
              <el-button type="text" size="small"><i class="el-icon-circle-plus"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-edit"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-error"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-refresh"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-weibiaoti1 iconfont"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pagesize"
          :total="manager_data.length" style="text-align: right">
        </el-pagination>
      </el-col>

    </el-row>

  </el-col>
</template>

<script>
  import Top_bar from '../share/top_bar'
    export default {
        name: "node_manager",
      components: {Top_bar},
      data(){
          return{
            now:'节点管理',
            manager_data:[{
              node:'node',
              manager:'192.168.2.1',
              detail:'11111',
              status:'ok',
              cluster_status:'ok',
              auth:'ok',
              rest:'one'
            }],
            pagesize: 10,
            currpage: 1
          }
      },
      methods:{
        handleCurrentChange(cpage) {
          this.currpage = cpage;
        },
        handleSizeChange(psize) {
          this.pagesize = psize;
        }

      }
    }
</script>

<style scoped>
 #node_manager{
   height: 100%;
   background-color: #EBECF1;
 }
  i{
    font-size: 1.8em;
  }
</style>
