<template>
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="system_manager">

      <el-row>
        <top_bar :who="now"></top_bar>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" :offset="1" style="margin-top: -2em;" v-if="isalive">
          <el-card class="box-card" shadow="always" style="height: 35em;overflow-y: scroll">

            <el-row class="uint-color" @click.native="changesetting('cluster')">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>集群管理</h4>
                <p>集群名称：<span>{{cluster_info.clustername}}</span></p>
                <p>集群描述：<span>{{cluster_info.story}}</span></p>
                <p>在线节点数：<span>{{cluster_info.onlinenode}}</span></p>
                <p>离线节点数：<span>{{cluster_info.offlinenode}}</span></p>
                <p>已部署节点数量：<span>{{cluster_info.node}}</span></p>
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
                <p>IP地址：  <span>{{net_info.IP}}</span></p>
                <p>网关：  <span>{{net_info.gateway}}</span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/net.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>

            <el-row class="uint-color" @click.native="changesetting('password')">
              <el-col :xs="18" :sm="18" :md="18" :lg="16" :xl="18" style="padding:0 1em">
                <h4>密码管理</h4>
                <p>平台管理员：<span>{{manager}}</span></p>
                <!--<p>密码：<span></span></p>-->
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="8" :xl="6">
                <img src="../../../static/images/password.png" style="width: 95%;margin: .5em .5em .5em 0">
              </el-col>
            </el-row>


          </el-card>
        </el-col>
        <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" :offset="1" style="margin-top: -2em;" >
          <Setting_block :who="setting_what"  :title="setting_title" :cluster="cluster_info" :network="net_info" v-on:change_content="change_content($event)"></Setting_block>
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
            setting_title:'',
            cluster_info:[],
            net_info:[],
            manager:'',
            isalive:true
          }
      },
      mounted(){
        this.changesetting('cluster')
        this.start()
        this.manager=sessionStorage.getItem('login')
      },
    methods:{
      start(){
        var _this=this
        this.$axios.get(_this.host+'monitor/cltselect').then(res=>{
          _this.cluster_info=res.data
          // sessionStorage.setItem('cluster_info',JSON.stringify(res.data))
        }).catch(error=>{
          console.log(error)
        })
        this.$axios.get(_this.host+'monitor/selectnetwork').then(res=>{
          _this.net_info=res.data
          // sessionStorage.setItem('net_info',JSON.stringify(res.data))
        }).catch(error=>{
          console.log(error)
        })
      },
      change_content(val){
        console.log(val)
        this.isalive=val
        this.start()
        this.isalive=!val
      },
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
