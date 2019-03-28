<template>
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="cluser_status">
      <top_bar :who=now></top_bar>
      <el-row>
        <el-col :xs="10" :sm="10" :md="22" :lg="10" :xl="10" :offset="1" style="margin-top: -2em">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>基本信息</span>
            </div>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
              <div class="line"></div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"  style="text-align: center;margin-bottom: 1em">
              <el-progress type="circle" :percentage="70" :stroke-width=15 style="margin: 2em 0 1em 0" :width="200" color="#299D83"></el-progress>
              <p class="health">已用容量：</p>
              <p class="health">可用容量：</p>
              <p class="health">总容量：</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
              <div class="line"></div>
            </el-col>
            <el-row>
                <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" >
                  <p class="health"> 集群名称：<span></span></p>
                </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
                <p class="health">FTP：<span></span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >
                <p class="health">在线节点数：<span></span></p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"  >
                <p class="health">节点数量：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"  >
                <p class="health">CIFS：<span></span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >
                <p class="health">离线节点数：<span></span></p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"  >
                <p class="health">版本：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
                <p class="health">NFS：<span></span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >
                <p class="health">共享卷数：<span></span></p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10"  >
                <p class="health">运行事件：<span></span></p>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"  >
                <p class="health">共享数：<span></span></p>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >
                <p class="health">配额数：<span></span></p>
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
            now:'集群状态'
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
        draw_disk(){
            this.$Highcharts.chart('disk', {
              title: {
                text: '磁盘读写速度KB/s',
                align:'left'
              },
              yAxis: {
                title: {
                  text: 'KB/s'
                }
              },

              plotOptions: {
                series: {
                  label: {
                    connectorAllowed: false
                  },
                  pointStart: 2010
                }
              },
              series: [{
                name: '读速度',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
              }, {
                name: '写速度',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
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
        }
      },
      mounted(){
        this.draw_cpu()
        this.draw_mom()
        this.draw_disk()
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
