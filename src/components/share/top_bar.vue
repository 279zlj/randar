<template>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" id="top_bar">
      <el-col class="bg-color">
        <el-row>
          <el-col :xs="7" :sm="4" :md="4" :lg="3" :xl="3" >
            <p style="text-align: center;color: white;font-size: 1.5em;line-height: .5em">{{who}}</p>
          </el-col>
          <el-col :xs="7" :sm="5" :md="15" :lg="16" :xl="17" style="height: 1em"></el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1">
            <router-link :to="{name:'warnning'}">
              <el-tooltip class="item" effect="dark" content="警告" placement="top">

                <i class="el-icon-jinggao1 iconfont logo"><el-badge is-dot class="item" style="margin-top: -.5em"></el-badge></i>

              </el-tooltip>
           </router-link>
          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >

              <el-tooltip class="item" effect="dark" content="关机" placement="top">
                <i class="el-icon-weibiaoti1 iconfont logo" @click="shutdown = true"></i>
              </el-tooltip>

          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >
            <router-link :to="{name:'user'}">
              <el-tooltip class="item" effect="dark" content="用户管理" placement="top">
                <i class="el-icon-user-s iconfont logo"></i>
              </el-tooltip>
            </router-link>

          </el-col>
          <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1"   >

              <el-tooltip class="item" effect="dark" content="退出" placement="top">
                <i class="el-icon-tuichu iconfont logo" @click="logout = true"></i>
              </el-tooltip>


          </el-col>
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
        </el-row>
      </el-col>
    </el-col>
</template>

<script>
    export default {
        name: "top_bar",
      props:['who'],
      watch:{
        who(){
          return this.who
        }
      },
      data(){
          return{
            shutdown:false,
            logout:false
          }
      },
      methods:{
        out(){
          this.logout=false
          this.$router.push('/')
          sessionStorage.removeItem('login')
        }
      }

    }
</script>

<style scoped>
  .bg-color {
    background: #214872;
    height: 8em;
    z-index: 999;
  }
  .logo{
      font-size: 1.5em;margin: .5em;color: white;cursor:pointer
    }
</style>
