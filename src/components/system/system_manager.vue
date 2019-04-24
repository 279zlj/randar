<template>
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="system_manager">

      <el-row>
        <top_bar :who="now"></top_bar>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" :offset="1" style="margin-top: -2em;" >
          <el-card class="box-card" shadow="always" style="height: 35em;overflow-y: scroll">

            <el-row class="uint-color" @click.native="changesetting('cluster')">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>集群管理</h4>
                <p>集群名称：<span></span></p>
                <p>在线节点数：<span></span></p>
                <p>离线节点数：<span></span></p>
                <p>已部署节点数量：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/cluster.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color" @click.native="changesetting('network')">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>网络配置</h4>
                <!--<p>时区：<span></span></p>-->
                <!--<p>网络时间服务器：<span></span></p>-->
                <p>IP地址：  <span></span></p>
                <p>网关：  <span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/net.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color" @click.native="changesetting('password')">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>密码管理</h4>
                <p>平台管理员：<span></span></p>
                <!--<p>密码：<span></span></p>-->
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/password.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <!--<el-row class="uint-color" @click.native="changesetting('nfs')">-->
              <!--<el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">-->
                <!--<h4>NFS管理</h4>-->
                <!--<p>NFS状态：<span></span></p>-->
              <!--</el-col>-->
              <!--<el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">-->
                <!--<img src="../../../static/images/nfs.png" style="width: 95%;margin: .5em .5em .5em 0">-->
              <!--</el-col>-->
            <!--</el-row>-->

            <!--<el-row class="uint-color" @click.native="changesetting('cifs')">-->
              <!--<el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">-->
                <!--<h4>CIFS管理</h4>-->
                <!--<p>CIFS状态：<span></span></p>-->
                <!--<p>描述：<span></span></p>-->
                <!--<p>CIFS认证方式：<span></span></p>-->
              <!--</el-col>-->
              <!--<el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">-->
                <!--<img src="../../../static/images/CIFS.png" style="width: 95%;margin: .5em .5em .5em 0">-->
              <!--</el-col>-->
            <!--</el-row>-->

            <!--<el-row class="uint-color" @click.native="changesetting('ftp')">-->
              <!--<el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">-->
                <!--<h4>FTP管理</h4>-->
                <!--<p>FTP状态：<span></span></p>-->
              <!--</el-col>-->
              <!--<el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">-->
                <!--<img src="../../../static/images/file.png" style="width: 95%;margin: .5em .5em .5em 0">-->
              <!--</el-col>-->
            <!--</el-row>-->

          </el-card>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" :offset="1" style="margin-top: -2em;" >
          <Setting_block :who="setting_what"  :title="setting_title"></Setting_block>
          <!--<Cluster_setting v-if="setting_what=='cluster'"></Cluster_setting>-->
        </el-col>
      </el-row>
    </el-col>
</template>

<script>
    import Top_bar from "../share/top_bar";
    import Setting_block from '../share/setting_block'
    // import Cluster_setting from "../share/cluster_setting";
    export default {
        name: "system_manager",
      components: { Top_bar,Setting_block},
      data(){

          return{
            now:'系统管理',
            setting_what:'',
            setting_title:''
          }
      },
      mounted(){
          this.changesetting('network')
      },
    methods:{
      changesetting(name){
        this.setting_what=name
        if (name=='network'){
          this.setting_title='网络配置'
        }
        else if (name=='cluster'){
          this.setting_title='集群管理'
        } 
        else if (name=='password'){
          this.setting_title='密码管理'
        }
        // else if (name=='nfs'){
        //   this.setting_title='NFS管理'
        // }
        // else if (name=='cifs'){
        //   this.setting_title='CIFS管理'
        // }
        // else if (name=='ftp'){
        //   this.setting_title='FTP管理'
        // }
        sessionStorage.setItem('set',this.setting_what)
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
    cursor: pointer;
  }
</style>
