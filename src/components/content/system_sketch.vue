<template>
  <div id="system_sketch">
    <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20">
      <el-row class="bg-color">
        <el-row>
          <el-col :span="1" :offset="20" >
            <i class="el-icon-jinggao1 iconfont logo"></i>
          </el-col>
          <el-col :span="1"  >
            <i class="el-icon-weibiaoti1 iconfont logo"></i>
          </el-col>
          <el-col :span="1"  >
            <i class="el-icon-user-s iconfont logo"></i>
          </el-col>
          <el-col :span="1"  >
            <i class="el-icon-tuichu iconfont logo"></i>
          </el-col>
        </el-row>
        <el-row>
          <div id="container" style="min-width: 100%; height: 330px; margin: 0 auto;margin-bottom: 1.5em"></div>
        </el-row>
      </el-row>
      <el-row style="margin-top: -1.5em">
        <el-col :span="10" :offset="1">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>集群健康状态</span>
            </div>
            <el-col :span="12">11111111</el-col>
            <el-col :span="12">
              <p style="margin-bottom: .5em">集群容量</p>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="40"></el-progress>
              <el-row style="margin: .5em 0">
                <el-col :span="12">
                  <p>集群名称：</p>
                </el-col>
                <el-col :span="12">
                  <p>FTP：</p>
                </el-col>
              </el-row>
            </el-col>
          </el-card>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>警告情况统计</span>
            </div>
            <el-col :span="12">11111111</el-col>
            <el-col :span="12">
              <span>集群容量</span>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "system_sketch",
      data(){
          return{
            line_data:[],
          }
      },
      mounted(){
          this.start()

      },
      methods:{
          start(){
            var _this=this
            this.$axios.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json').then(function (res) {
              _this.line_data=res.data
              _this.cluster(_this.line_data)
            }).catch(function (error) {
              console.log(error)
            })
          },
        cluster(data){

          this.$Highcharts.chart('container', {
            chart: {
              zoomType: 'x',
              backgroundColor: 'rgba(0,0,0,0)',
            },
            title: {
              text: '集群利用状况',
              align:'left',
              style: {

                color: '#FFF'
              }
            },
            xAxis: {
              type: 'datetime',
              labels: {
                style: {
                  color: '#FFF',//颜色
                  fontSize:'14px'  //字体
                }
              },
              lineColor: "#FFF",
            },
            yAxis: {
              title: {
                text: '（%）',
                style:{
                  color:'#FFF'
                }
              },
              labels: {
                style: {
                  color: '#FFF',//颜色
                  fontSize:'14px'  //字体
                }
              },
            },
            legend: {
              enabled:true,
              data: ['CPU', '内存'],
              align: 'right',
              verticalAlign: 'top',
              itemStyle:{
                color:'#FFF'
              }
            },
            plotOptions: {
              area: {
                fillColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                  },
                  stops: [
                    [0, this.$Highcharts.getOptions().colors[3]],
                    [1, this.$Highcharts.Color(this.$Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                  ]
                },
                marker: {
                  radius: 2
                },
                lineWidth: 1,
                states: {
                  hover: {
                    lineWidth: 1
                  }
                },
                threshold: null
              }
            },

            series: [{
              type: 'area',
              name: 'CPU',
              data: data
            },
              {
                type: 'area',
                name: '内存',
                data: data
              }]
          });
        }
        }

    }
</script>

<style scoped>
  .bg-color {
    background: #1A3E67;
  }
  .logo{
    font-size: 1.5em;margin: .5em;color: white;cursor:pointer
  }
</style>
