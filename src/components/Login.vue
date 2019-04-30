<template>
  <el-row id="HelloWorld">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="picture">

      </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
      <el-row>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="10">
          <img src="../../static/images/login_1.png" style="margin: 10em 0 3em 0"/>
        </el-col>
      </el-row>
      <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :offset="6">
        <p>账号</p>
        <el-input type="text" v-model="user"  autofocus></el-input>
      </el-col>
      </el-row>
      <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :offset="6">
        <p>密码</p>
        <el-input type="password" v-model="pwd" ></el-input>
      </el-col>
      </el-row>
      <el-row v-show="tips">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :offset="6">
          <span style="color: #F56C6C">{{tips}}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" :offset="6">
          <el-button type="primary" style="margin-top: 2em;width: 100%" round @click="login"  @keydown.enter.native="login()">登录</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tips:'',
      user:'',
      pwd:'',

    }
  },
  mounted(){
    this.start()
    this.keyupSubmit()
  },
  methods:{
    start(){
      this.$axios.get(this.host+'cluster/init/').then(res=>{
        console.log(res)
      }).catch(error=>{
        console.log(error)
      })
    },
    login(){
      // if (this.user=='admin'&& this.pwd=='admin'){
      //   sessionStorage.setItem('login',this.user)
      //   this.$router.push('index')
      // }
      // else{
      //   this.tips='输入的账号或密码错误！'
      // }
      this.$axios.post(this.host+'monitor/login',{user:this.user,password:this.pwd}).then(res=>{
        if (res.data.status=='OK'){
          sessionStorage.setItem('login',this.user)
          this.$router.push('index')
        }
        else {
          this.tips='输入账号或者密码错误！'
        }
      })
    },
    keyupSubmit(){


      fsGFSGHrf
      document.onkeydown=e=>{
        let _key=event.keyCode;
        var a =sessionStorage.getItem('login')
        if(_key===13 && a!='ok'){
          this.login()
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HelloWorld{
  height: 100%;
  overflow-y: hidden;
}
  #picture{
    background: url("../../static/images/login.gif") no-repeat;
    background-size: contain;
    height: 100%;

  }
</style>
