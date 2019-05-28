<template>
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="cluser_status">

      <el-row>
        <top_bar :who=now></top_bar>
        <el-col :xs="10" :sm="10" :md="22" :lg="10" :xl="10" :offset="1" style="margin-top: -2em">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>基本信息</span>
            </div>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
              <div class="line"></div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"  style="text-align: center;margin-bottom: 1em">
              <el-progress type="circle" :percentage="percent" :stroke-width=15 style="margin: 2em 0 1em 0" :width="200" color="#299D83"></el-progress>
              <p class="health">已用容量：<span>{{info.used}}</span>GB</p>
              <p class="health">可用容量：<span>{{info.Present}}</span>GB</p>
              <p class="health">总容量：<span>{{info.Configured}}</span>GB</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
              <div class="line"></div>
            </el-col>
            <el-row>
                <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" >
                  <p class="health"> 集群名称：<span>{{info.clustername}}</span></p>
                </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >

                <p class="health">版本：<span>V1.01</span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >
                <p class="health">在线节点数：<span>{{info.onlinenode}}</span></p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"  >
                <p class="health">节点数量：<span>{{info.node}}</span></p>
              </el-col>

              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                <p class="health">FTP：<span>关</span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"  >

                <p class="health">离线节点数：<span>{{info.offlinenode}}</span></p>
              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :xs="11" :sm="11" :md="22" :lg="11" :xl="11" :offset="1" style="margin-top: -2em;">
          <div id="cpu" class="charts"></div>
        </el-col>
        <el-col :xs="11" :sm="11" :md="22" :lg="11" :xl="11" :offset="1" style="margin-top: 1em">
          <div id="mom" class="charts"></div>
        </el-col>
        <el-col :xs="11" :sm="11" :md="22" :lg="11" :xl="11" :offset="1" style="margin-top: 1em;margin-bottom: 1em">
          <div id="disk" class="charts"></div>
        </el-col>
      </el-row>
    </el-col>
</template>

<script>
  import Top_bar from "../share/top_bar";
    export default {
        name: "cluster_status",
      components: {Top_bar},

      data(){
          return{
            now:'集群状态',
            percent:0,
            info:[],
            outnum:'',
            idisk:[],
            odisk:[],
            disktime:[],
            aaa:'',
            time:[],
            cpu:[],
            memory:[]
          }
      },
      computed: {
        use() {
          return this.$store.state.time, this.$store.state.cpu, this.$store.state.memory
        },
        disk() {
          return this.$store.state.disktime, this.$store.state.idisk, this.$store.state.odisk
        },
      },
      methods:{
          draw_cpu(time,data){
            var cpu=this.$echarts.init(document.getElementById('cpu'))
            var option={
              color: ['#67C23A'],
              xAxis: [{
                data: time,
                type : 'category',
                boundaryGap : false,
              },

              ],
              tooltip: {
                trigger: 'axis'
              },
              yAxis: [{
                name:'(%)',
                lineStyle:{
                  color:'white'
                },
                max: 100,

                splitLine: {show: false}
              }],
              series: [{
                name:'CPU',
                data: data,
                type: 'line',
                smooth: true,
                areaStyle: {normal: {}},
                itemStyle : {
                  normal : {
                    lineStyle:{
                      color:'#67C23A',
                      width:5
                    }
                  }
                },
              }]
            };
            cpu.setOption(option)
          },
        draw_mom(time,data){
          var mom=this.$echarts.init(document.getElementById('mom'))
          var option={
            color: ['#F56C6C'],
            xAxis:[{
              data: time,
              type : 'category',
              boundaryGap : false,
            },
            ],
            tooltip: {
              trigger: 'axis'
            },
            yAxis: [{
              name:'(%)',
              lineStyle:{
                color:'white'
              },
              max: 100,

              splitLine: {show: false}
            }],
            series: [{
              name:'Memory',
              data: data,
              type: 'line',
              smooth: true,
              areaStyle: {normal: {}},
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#F56C6C',
                    width:5
                  }
                }
              },
            }]
          };
          mom.setOption(option)
        },
        draw_disk(read,write,time){

          var disk=this.$echarts.init(document.getElementById('disk'))
          var option={
            color: ['#E6A23C', '#409EFF'],
            xAxis: [{
              data: time,
              type : 'category',
              boundaryGap : false,
            }
            ],
            tooltip: {
              trigger: 'axis'
            },
            yAxis: [{
              name:'(KB/s)',
              lineStyle:{
                color:'white'
              },
              max: 300,

              splitLine: {show: false}
            }],
            series: [{
              name:'Write',
              data: write,
              type: 'line',
              smooth: true,
              areaStyle: {normal: {}},
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#E6A23C',
                    width:5
                  }
                }
              },
            },
              {
                name:'Read',
                data:read,
                type:'line',
                smooth:true,
                areaStyle: {normal: {}},
                itemStyle : {
                  normal : {
                    lineStyle:{
                      color:'#409EFF',
                      width:5
                    }
                  }
                },
              }]
          };
          disk.setOption(option)
        },
        getdata(){
          var _this=this
            this.$axios.get(_this.host+'monitor/disk').then(res=>{
              _this.idisk.push(res.data.read)
              _this.odisk.push(res.data.write)
              _this.disktime.push(res.data.data)
              _this.$store.commit('disk', {disktime:_this.disktime, idisk: _this.idisk, odisk: _this.odisk})
              _this.draw_disk(_this.$store.state.idisk,_this.$store.state.odisk,_this.$store.state.disktime)
              _this.draw_cpu(_this.$store.state.time,_this.$store.state.cpu)
              _this.draw_mom(_this.$store.state.time,_this.$store.state.memory)
            }).catch(error=>{
              console.log(error)
            })

        },
        start(){
            var _this=this
            this.$axios.get(_this.host+'monitor/cltselect').then(res=>{
              _this.info=res.data
              _this.percent=_this.info.Clusterspace*100
            }).catch(error=>{
              console.log(error)
            })
        }
      },
      mounted(){
        this.start()
        this.time=this.$store.state.time
        this.cpu=this.$store.state.cpu
        this.memory=this.$store.state.memory
        this.disktime=this.$store.state.disktime
        this.odisk=this.$store.state.odisk
        this.idisk=this.$store.state.idisk
        this.draw_cpu(this.time,this.cpu)
        this.draw_mom(this.time,this.memory)
        this.draw_disk(this.idisk,this.odisk,this.disktime)
        var _this=this
        this.aaa=setInterval(function () {
          _this.getdata()
        },10000)
      },
      destroyed(){
          var _this=this
        clearInterval(_this.aaa)
      }
    }
</script>

<style scoped>
  #cluser_status{
    height: 100%;
    overflow-y: scroll;
    background-color: #EBECF1;
  }
  .line{
    width: 100%;
    height: 100%;
    display: table;
    vertical-align: middle;
    border-top:1px solid #299D83;
    margin: 100% 0;
  }
  .charts{
    width: 100%;height:250px;border-radius: .3em;
    background-color: white;
  }
</style>
