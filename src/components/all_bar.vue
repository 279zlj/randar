<template>
      <el-col :xs="6" :sm="6" :md="6" :lg="4" :xl="4" id="all_bar" >
        <el-row>
          <el-row style="border-bottom: 1px solid white; ">
            <el-col :space="6" :offset="9"><img src="../../static/images/radar.svg" id="image"></el-col>
          </el-row>
          <el-menu default-active="1-1" class="el-menu-vertical-demo" background-color="#299D83" text-color="#fff" style="margin-top: 1em">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-ziyuanxhdpi iconfont"></i>
                <span>系统监控</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">系统概述</el-menu-item>
                <el-menu-item index="1-2">集群状态</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-jiedian iconfont"></i>
              <span slot="title">节点管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-user-s iconfont"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">系统管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-warning"></i>
              <span slot="title">警告管理</span>
            </el-menu-item>
          </el-menu>
        </el-row>
      </el-col>
</template>

<script>
    export default {
        name: "all_bar"
    }
</script>

<style scoped>
  #all_bar{
    top:0;
    bottom: 0;
    height: 100%;
    background-color: #299D83;
  }
  #image{
    width: 4.5em;margin: 1em 0;color: white
  }
</style>
