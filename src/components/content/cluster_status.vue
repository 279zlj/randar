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
              <el-progress type="circle" :percentage="info.Clusterspace*100" :stroke-width=15 style="margin: 2em 0 1em 0" :width="200" color="#299D83"></el-progress>
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
          <div id="cpu" style="width: 100%;height:250px;border-radius: .3em"></div>
        </el-col>
        <el-col :xs="11" :sm="11" :md="22" :lg="11" :xl="11" :offset="1" style="margin-top: 1em">
          <div id="mom" style="width: 100%;height:250px;border-radius: .3em"></div>
        </el-col>
        <el-col :xs="11" :sm="11" :md="22" :lg="11" :xl="11" :offset="1" style="margin-top: 1em;margin-bottom: 1em">
          <div id="disk" style="width: 100%;height:250px;border-radius: .3em"></div>
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
            percent:20,
            info:[],
            outnum:'',
            idisk:[],
            odisk:[],
            disktime:[]
          }
      },

      methods:{
          draw_cpu(){
            this.$Highcharts.chart('cpu', {
              chart: {
                type: 'spline'
              },
              title: {
                text: 'CPU使用率（%）',
                align:'left'
              },
              colors:[
                '#67C23A'
              ],
              legend: {
                enabled:false
              },

              xAxis: {
                type: 'datetime',
                labels: {
                  overflow: 'justify'
                },

              },

              yAxis: {
                title: {
                  text: '%'
                },
                min: 0,

                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
              },
              tooltip: {
                valueSuffix: ' m/s'
              },
              plotOptions: {
                spline: {
                  lineWidth: 4,
                  states: {
                    hover: {
                      lineWidth: 5
                    }
                  },
                  marker: {
                    enabled: false
                  },
                  pointInterval: 3600000, // one hour
                  pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
              },
              series: [{
                name: 'CPU使用率',
                data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                  7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                  8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                  7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                  3.0, 3.0]
              }],
              navigation: {
                menuItemStyle: {
                  fontSize: '10px'
                }
              }
            });
          },
        draw_mom(){
          this.$Highcharts.chart('mom', {
            chart: {
              type: 'spline'
            },
            colors:[
              '#F56C6C'
            ],
            title: {
              text: '内存使用率（%）',
              align:'left'
            },
            legend: {
              enabled:false
            },
            xAxis: {
              type: 'datetime',
              labels: {
                overflow: 'justify'
              },

            },
            yAxis: {
              title: {
                text: '%'
              },
              min: 0,

              minorGridLineWidth: 0,
              gridLineWidth: 0,
              alternateGridColor: null,
            },
            tooltip: {
              valueSuffix: ' m/s'
            },
            plotOptions: {
              spline: {
                lineWidth: 4,
                states: {
                  hover: {
                    lineWidth: 5
                  }
                },
                marker: {
                  enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
              }
            },
            series: [{
              name: '内存使用率',

              data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                3.0, 3.0]
            }],
            navigation: {
              menuItemStyle: {
                fontSize: '10px'
              }
            }
          });
        },
        draw_disk(read,write,time){
            this.$Highcharts.chart('disk', {
              title: {
                text: '磁盘读写速度KB/s',
                align:'left'
              },
              events:{
                load:function () {
                  var _this=this
                  var loaddata=function () {
                    this.$axios.get(_this.host+'moniter/disk/').then(res=>{
                      _this.percent=20
                      _this.idisk.push(res.data.read)
                      _this.odisk.push(res.data.write)
                      _this.disktime.push(res.data.data)
                      // console.log(_this.idisk)
                      // _this.usage=res
                      // _this.freeuse=res
                      // _this.alluse=res
                      // _this.innum=res
                      // _this.nodenum=res
                      // _this.outnum=res
                    }).catch(error=>{
                      console.log(error)
                    })
                  };
                  loaddata();
                  setInterval(loaddata,5000)
                }
              },
              yAxis: {
                title: {
                  text: 'KB/s'
                }
              },
              xAxis: {
                tickInterval: 5,
                categories:time
              },
              series: [{
                name: '读速度',
                data: read
              }, {
                name: '写速度',
                data: write
              }],
              responsive: {
                rules: [{
                  condition: {
                    maxWidth: 500
                  },
                  chartOptions: {
                    legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                    }
                  }
                }]
              }
            });
        },
        getdata(){
          var _this=this
            this.$axios.get(_this.host+'moniter/disk/').then(res=>{
              _this.percent=20
              _this.idisk.push(res.data.read)
              _this.odisk.push(res.data.write)
              _this.disktime.push(res.data.data)
              // console.log(_this.idisk)
              // _this.usage=res
              // _this.freeuse=res
              // _this.alluse=res
              // _this.innum=res
              // _this.nodenum=res
              // _this.outnum=res
            }).catch(error=>{
              console.log(error)
            })
        },
        start(){
            var _this=this
            this.$axios.get(_this.host+'moniter/cltselect/').then(res=>{
              _this.info=res.data
            }).catch(error=>{
              console.log(error)
            })
        }
      },
      mounted(){
          // var _this=this
          // setInterval(function () {
          //   _this.getdata()
          //
          //   _this.draw_disk(_this.idisk,_this.odisk,_this.disktime)
          // },5000)
        this.start()
        this.draw_cpu()
        this.draw_mom()
        this.draw_disk(this.idisk,this.odisk,this.disktime)
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
</style>
