<template>

    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="system_sketch">
      <el-row class="bg-color">
        <el-col :xs="7" :sm="6" :md="5" :lg="3" :xl="3">
          <p style="text-align: center;color: white;font-size: 1.5em;line-height: .5em">集群利用状况</p>
        </el-col>
        <el-row>
          <el-col :xs="7" :sm="12" :md="14" :lg="16" :xl="17" style="height: 1em"></el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1" >
            <div style="cursor: pointer">
              <el-tooltip class="item" effect="dark" content="警告" placement="top">
                <router-link :to="{name:'warnning'}"><i class="el-icon-jinggao1 iconfont logo"><el-badge is-dot class="item" style="margin-top: -.5em"></el-badge></i></router-link>
              </el-tooltip>
            </div>
          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >
            <el-tooltip class="item" effect="dark" content="关机" placement="top">
              <i class="el-icon-weibiaoti1 iconfont logo" @click="shutdown = true"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >
            <el-tooltip class="item" effect="dark" content="用户管理" placement="top">
              <router-link :to="{name:'user'}"><i class="el-icon-user-s iconfont logo"></i></router-link>
            </el-tooltip>
          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >
            <el-tooltip class="item" effect="dark" content="退出" placement="top">
              <i class="el-icon-tuichu iconfont logo" @click="logout = true"></i>
            </el-tooltip>
          </el-col>

        </el-row>
        <el-row>
          <div id="container" style="width: 100%; height: 330px; margin: 0 auto;margin-bottom: 1.5em">

          </div>
        </el-row>
      </el-row>
      <el-row style="margin-top: -1.5em">
        <el-col :xs="22" :sm="22" :md="22" :lg="10" :xl="10" :offset="1">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>集群健康状态</span>
            </div>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="10" style="text-align: center;margin-top: 1.5em">

                <el-progress type="circle" :percentage="100" status="text" :stroke-width=15 color="#67C23A">正常</el-progress>

            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="border-left: 1px solid darkgrey;padding: 1em;margin-bottom: 1em">
              <p class="health">集群容量</p>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
              <el-row >
                <el-col :span="24">
                  <p class="health">集群名称：{{disk_info.Clustername}}</p>
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="18">
                  <p class="health">节点数量：<span>{{disk_info.nodesum}}</span></p>
                </el-col>
                <el-col :span="6">
                  <p class="health">FTP：关</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <p class="health">版本：V1.01</p>
                </el-col>
              </el-row>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="22" :sm="22" :md="22" :lg="11" :xl="11" :offset="1">
          <el-card class="box-card" shadow="hover">
            <div>
              <span>警告情况统计</span>
            </div>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" >
              <el-card shadow="always" style="background-color: #F56C6C;height: 14em;border-radius: 1em;margin: 1.3em 0">

                <p style="color: #DB5147" class="f-size">灾难</p>
                <p style="text-align: center;color: white;"><span style="font-size: 4em">0</span>个</p>
                <i class="el-icon-warning" style="color: #EA5F54;font-size: 4.5em"></i>
              </el-card>

            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" :offset="1">
              <el-card shadow="always" style="background-color: #E6A23C;height: 14em;border-radius: 1em;margin: 1.3em 0">

                <p style="color: #E77E1B" class="f-size">严重</p>
                <p style="text-align: center;color: white;"><span style="font-size: 4em">0</span>个</p>
                <i class="el-icon-warning" style="color: #E9821E;font-size: 4.5em"></i>
              </el-card>

            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" :offset="1">
              <el-card shadow="always" style="background-color: #67C23A;height: 14em;border-radius: 1em;margin: 1.3em 0">

                <p style="color: #86E16E" class="f-size">一般</p>
                <p style="text-align: center;color: white;"><span style="font-size: 4em">0</span>个</p>
                <i class="el-icon-warning" style="color: #86E16E;font-size: 4.5em"></i>
              </el-card>

            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" :offset="1">
              <el-card shadow="always" style="background-color: #409EFF;height: 14em;border-radius: 1em;margin: 1.3em 0">

                <p style="color: #5BB2E9" class="f-size">警告</p>
                <p style="text-align: center;color: white;"><span style="font-size: 4em">0</span>个</p>
                <i class="el-icon-warning" style="color: #5BB2E9;font-size: 4.5em"></i>
              </el-card>

            </el-col>
            <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" :offset="1">
              <el-card shadow="always" style="background-color: #409EFF;height: 14em;border-radius: 1em;margin: 1.3em 0">

                <p style="color: #5BB2E9" class="f-size">信息</p>
                <p style="text-align: center;color: white;"><span style="font-size: 4em">1</span>个</p>
                <i class="el-icon-warning" style="color: #5BB2E9;font-size: 4.5em"></i>
              </el-card>

            </el-col>
          </el-card>

        </el-col>

      </el-row>
      <el-row>
        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1" style="margin-top:1em;margin-bottom: 1em">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>节点信息统计</span>
            </div>
            <el-table :data="node" style="width: 100%" height="200">
              <el-table-column prop="name" label="节点名称" ></el-table-column>
              <el-table-column prop="IP" label="IP"></el-table-column>
              <el-table-column prop="status" label="状态" ></el-table-column>
              <el-table-column prop="information" label="磁盘数" ></el-table-column>
              <el-table-column prop="Totalspace" label="存储空间" ></el-table-column>
              <el-table-column prop="Availablespace" label="可用空间（%）" ></el-table-column>
              <el-table-column prop="cpuuse" label="CPU（%）" ></el-table-column>
              <el-table-column prop="menuse" label="内存（%）" ></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-dialog
        title="提示"
        :visible.sync="shutdown"
        width="30%"
      >
        <span>确认关机？</span>
        <span slot="footer" class="dialog-footer">
              <el-button @click="shutdown = false">取 消</el-button>
              <el-button type="primary" @click="shutdown = false">确 定</el-button>
            </span>
      </el-dialog>
      <el-dialog title="提示" :visible.sync="logout" width="30%" >
        <span>退出系统？</span>
        <span slot="footer" class="dialog-footer">
              <el-button @click="logout=false">取 消</el-button>
              <el-button type="primary" @click="out()">确 定</el-button>
            </span>
      </el-dialog>
    </el-col>

</template>

<script>
    export default {
        name: "system_sketch",
      data(){
          return{
            line_data:[],
            node:[],
            shutdown:false,
            logout:false,
            percent:0,
            nodenum:1,
            disk_info:[],
            time:[],
            cpu:[],
            memory:[],
            idisk:[],
            odisk:[],
            disktime:[],
            aaa:''
          }
      },
      computed: {
        use() {
          return this.$store.state.time, this.$store.state.cpu, this.$store.state.memory
        },

      },
      mounted(){
        this.cluster(this.$store.state.time,this.$store.state.cpu,this.$store.state.memory)
          this.time=this.$store.state.time
          this.cpu=this.$store.state.cpu
          this.memory=this.$store.state.memory
          var _this=this
          _this.aaa=setInterval(function () {
            _this.start()

          },10000)


      },
      destroyed(){
        var _this=this
        clearInterval(_this.aaa)
      },
      methods:{
        out(){
          this.logout=false
          this.$router.push('/')
        },
          start(){


              var _this=this
            this.$axios.get(this.host+'monitor/use').then(function (res) {
              _this.line_data=res.data
              _this.time.push(res.data.data)
              _this.cpu.push(res.data.cpuuse)
              _this.memory.push(res.data.menuse)
              _this.$store.commit('use', {time: _this.time, cpu: _this.cpu, memory: _this.memory})
              _this.cluster(_this.$store.state.time,_this.$store.state.cpu,_this.$store.state.memory)
            }).catch(function (error) {
              console.log(error)
            })
            this.$axios.get(this.host+'cluster/information').then(res=>{
              _this.node=res.data
            }).catch(error=>{
              console.log(error)
            })
            this.$axios.get(this.host+'cluster/disk').then(res=>{
              _this.disk_info=res.data
              _this.percent=_this.disk_info.Clusterspace*100
            })
            this.$axios.get(_this.host+'monitor/disk').then(res=>{

                _this.idisk.push(res.data.read)
                _this.odisk.push(res.data.write)
                _this.disktime.push(res.data.data)
                _this.$store.commit('disk', {disktime:_this.disktime, idisk: _this.idisk, odisk: _this.odisk})
            }).catch(error=>{
              console.log(error)
            })


            // this.$axios.get('').then(res=>{
            //   _this.percent=50
            //   _this.nodenum=1
            //   _this.node=res.data
            // })
          },
        cluster(time,cpu,memory){

          var mychart = this.$echarts.init(document.getElementById('container'))

          var option ={
            color: ['#67C23A', '#F56C6C'],

            tooltip: {
              trigger: 'axis'
            },
            xAxis: [{
              data: time,
              type : 'category',
              boundaryGap : false,
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            ],
            yAxis: [{
              name:'(%)',
              max: 100,
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
              splitLine: {show: false}
            }],
            series: [{
              name: 'CPU',
              type: 'line',
              showSymbol: false,
              data: cpu,
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#67C23A',
                    width:5
                  }
                }
              },
            },
              {
                name: 'Memory',
                type: 'line',
                showSymbol: false,
                data: memory,
                itemStyle : {
                  normal : {
                    lineStyle:{
                      color:'#F56C6C',
                      width:5
                    }
                  }
                },
              }]
          }
          mychart.setOption(option)
        }
        }

    }
</script>

<style scoped>
  #system_sketch{
    background-color: #EBECF1;
    height: 100%;
    overflow-y: scroll;
  }

  .logo{
    font-size: 1.5em;margin: .5em;color: white;cursor:pointer
  }
  .f-size{
    text-align: center;font-size: 1.5em;
  }

</style>
