<template>
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="system_manager">
      <top_bar :who="now"></top_bar>
      <el-row>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" :offset="1" style="margin-top: -2em;" >
          <el-card class="box-card" shadow="always" style="height: 45em;overflow-y: scroll">
            <el-row class="uint-color">
            <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
              <h4>网络配置</h4>
              <p>时区：<span></span></p>
              <p>网络时间服务器：<span></span></p>
              <p>DNS服务器：  <span></span></p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
              <img src="../../../static/images/net.png" style="width: 95%;margin: .5em .5em .5em 0">
            </el-col>
            </el-row>

            <el-row class="uint-color">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>集群管理</h4>
                <p>集群名称：<span></span></p>
                <p>已部署节点数量：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/cluster.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>密码管理</h4>
                <p>平台管理员：<span></span></p>
                <p>密码：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/password.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>NFS管理</h4>
                <p>NFS状态：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/nfs.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>CIFS管理</h4>
                <p>CIFS状态：<span></span></p>
                <p>描述：<span></span></p>
                <p>CIFS认证方式：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/CIFS.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>FTP管理</h4>
                <p>FTP状态：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/file.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

          </el-card>
        </el-col>
      </el-row>
    </el-col>
</template>

<script>
    import Top_bar from "../share/top_bar";
    export default {
        name: "system_manager",
      components: {Top_bar},
      data(){
          return{
            now:'系统管理'
          }
      }
    }
</script>

<style scoped>
  #system_manager{
    height: 100%;
    background-color: #EBECF1;
  }
  .uint-color{
    background-color: #E6A23C;
    color: white;
    border-radius: .5em;
    margin-top: 1em;
  }
</style>
