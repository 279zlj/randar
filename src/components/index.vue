<template>
  <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="index">
    <el-row>
      <top_bar :who="now"></top_bar>
      <el-row id="radar">
        <img src="../../static/images/index.gif" style="margin: 0 auto;width: 28em;height: 26em;margin-left: 35%"/>
      </el-row>
      <el-row>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" :offset="2">
        <el-card class="box-card" shadow="always" style="margin-top: -1.5em">
          <div slot="header" class="clearfix">
            <span>雷达信息</span>
          </div>
          <div>
            <p>距离：<span>25</span>公里</p>
            <p>干扰杂波区：PQ=<span>0</span></p>
            <p>清洁区：PQ=<span>1</span></p>
            <p>点迹正常：<span><el-tag type="success">正常</el-tag></span></p>
          </div>
        </el-card>
        </el-col>
        <!--<el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :offset="1" >-->
          <!--<el-card class="box-card" shadow="always" style="margin-top: -1.5em">-->
            <!--<div slot="header" class="clearfix">-->
              <!--<span>雷达图二</span>-->
            <!--</div>-->
            <!--<div>-->
              <!--<p>距离：<span>25</span>公里</p>-->
              <!--<p>干扰杂波区：PQ=<span>0</span></p>-->
              <!--<p>清洁区：PQ=<span>1</span></p>-->
              <!--<p>点迹正常：<span><el-tag type="success">正常</el-tag></span></p>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->
        <!--<el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7" :offset="1" >-->
          <!--<el-card class="box-card" shadow="always" style="margin-top: -1.5em">-->
            <!--<div slot="header" class="clearfix">-->
              <!--<span>雷达图三</span>-->
            <!--</div>-->
            <!--<div>-->
              <!--<p>距离：<span>25</span>公里</p>-->
              <!--<p>干扰杂波区：PQ=<span>0</span></p>-->
              <!--<p>清洁区：PQ=<span>1</span></p>-->
              <!--<p>点迹正常：<span><el-tag type="success">正常</el-tag></span></p>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->
      </el-row>
    </el-row>
  </el-col>
</template>

<script>
    import Top_bar from "./share/top_bar";
    export default {
        name: "index",
      components: {Top_bar},
      data(){
          return{
            now:'雷达散点图'
        }
      }
    }
</script>

<style scoped>
#index{
  height: 100%;
  background-color: #EBECF1;
}
  #radar{
    background-color: #214872;
    height: 35em;
    margin-top: 5em;
  }
  p{
    color: #2591B6;
  }
  span{
    color: #005673;
  }
</style>
