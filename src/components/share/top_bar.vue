<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" id="top_bar">
      <el-col class="bg-color">
        <el-row>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" >
            <p style="text-align: center;color: white;font-size: 1.5em;line-height: .5em">{{who}}</p>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" :offset="17">
            <i class="el-icon-jinggao1 iconfont logo"></i>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"   >
            <i class="el-icon-weibiaoti1 iconfont logo"></i>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"   >
            <i class="el-icon-user-s iconfont logo"></i>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"   >
            <i class="el-icon-tuichu iconfont logo"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-col>
</template>

<script>
    export default {
        name: "top_bar",
      props:['who'],
      watch:{
        who(){
          return this.who
        }
      },

    }
</script>

<style scoped>
  .bg-color {
    background: #1A3E67;
    height: 8em;
  }
  .logo{
      font-size: 1.5em;margin: .5em;color: white;cursor:pointer
    }
</style>
