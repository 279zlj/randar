<template>
  <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="user">
    <Top_bar :who="now"></Top_bar>
    <el-row>
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1" style="margin-top: -2em;">

        <el-table :data="user_data.slice((currpage - 1) * pagesize, currpage * pagesize)" height="500" style="width: 100%;border-radius: .5em;padding: 1em">
          <el-table-column prop="group" label="组名"></el-table-column>
          <el-table-column prop="name" label="用户名"></el-table-column>
          <el-table-column prop="detail" label="用户描述"></el-table-column>
          <el-table-column prop="own" label="所属组名"></el-table-column>
          <el-table-column
            label="操作"
            width="250">
            <template slot-scope="scope">
              <el-button type="text" size="small"><i class="el-icon-circle-plus"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-edit"></i></el-button>
              <el-button type="text" size="small"><i class="el-icon-error"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pagesize"
          :total="user_data.length" style="text-align: right">
        </el-pagination>
      </el-col>

    </el-row>
  </el-col>
</template>

<script>
  import Top_bar from "../share/top_bar";
    export default {
        name: "user",
      components: {Top_bar},
      data(){
          return{
            now:'用户管理',
            user_data:[{
              group:'001',
              name:'test',
              detail:'one',
              own:'111'
            }],
            pagesize: 5,
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
  #user{
    height: 100%;
    background-color: #EBECF1;
  }
  i{
    font-size: 1.8em;
  }
</style>
