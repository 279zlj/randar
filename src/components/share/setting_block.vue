<template>
    <div id="setting_block">
      <el-card class="box-card" shadow="alaways" >
        <div slot="header" class="clearfix">
          <span>{{title}}</span>

        </div>
        <el-row>
          <el-alert title="操作成功" type="success" show-icon :closable="false" id="tooltip" style="display: none"></el-alert>
          <el-alert title="操作失败" type="error" show-icon :closable="false" id="errortip" style="display: none" ></el-alert>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="IP地址" v-if="who=='network'">
              <span>{{network.IP}}</span>
            </el-form-item>
            <el-form-item label="网关" prop="gateway" v-if="who=='network'">
              <el-input type="text" v-model="ruleForm2.gateway" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="首选DNS" prop="fdns" v-if="who=='network'">
              <el-input type="text" v-model="ruleForm2.fdns" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="第二DNS" prop="sdns" v-if="who=='network'">
              <el-input type="text" v-model="ruleForm2.sdns" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="集群名称" prop="cluster_name" v-if="who=='cluster'">
              <el-input type="text" v-model="ruleForm2.cluster_name" auto-complete="off" :placeholder="cluster.clustername"></el-input>
            </el-form-item>
            <el-form-item label="集群描述" prop="content" v-if="who=='cluster'">
              <el-input type="text" v-model="ruleForm2.content" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="主IP"  v-if="who=='cluster'">
              <span>{{cluster.IP}}</span>
            </el-form-item>
            <el-form-item label="已部署节点数" v-if="who=='cluster'">
              <span>{{cluster.node}}</span>
            </el-form-item>
            <el-form-item label="用户名" v-if="who=='password'">
              <span>{{user}}</span>
            </el-form-item>
            <el-form-item label="当前密码" prop="pwd" v-if="who=='password'">
              <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpwd" v-if="who=='password'">
              <el-input type="password" v-model="ruleForm2.newpwd" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="newpwdt" v-if="who=='password'">
              <el-input type="password" v-model="ruleForm2.newpwdt" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitform('ruleForm2')">提交</el-button>
              <el-button @click="resetform('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-card>
      <el-dialog title="目录选择" :visible.sync="dialogVisible " width="30%" >
        <span>目录</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible =false">取消</el-button>
          <el-button type="primary" @click="dialogVisible =false">确定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "setting_block",
      props:['who','title','cluster','network'],
      watch:{
        who() {
          this.$refs['ruleForm2'].resetFields();
          return this.who = this.who
        },
        title() {
          this.$refs['ruleForm2'].resetFields();
          return this.title = this.title
        },
        cluster() {
          this.$refs['ruleForm2'].resetFields();
          return this.cluster = this.cluster
        },
        network() {
          this.$refs['ruleForm2'].resetFields();
          return this.network = this.network
        }
      },
      data(){
        // var validateip = (rule, value, callback) => {
        //   if (value === '') {
        //     callback(new Error('请输入IP地址'));
        //   } else {
        //     var Regex = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        //     if (!Regex.test(value)) {
        //       callback(new Error('IP地址格式不正确！'))
        //     } else {
        //       callback();
        //     }
        //   }
        // };
        var validategw = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入网关地址'));
          } else {
            var Regex = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            if (!Regex.test(value)) {
              callback(new Error('网关地址格式不正确！'))
            } else {
              callback();
            }
          }
        };
        var validatedns = (rule,value,callback)=>{
          if (value===''){
            callback();
          }
          else {
            var Regex = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            if (!Regex.test(value)) {
              callback(new Error('DNS地址格式不正确！'))
            } else {
              callback();
            }
          }
        };
        var validatedns2 = (rule,value,callback)=>{
          if (value===''){
            callback();
          }
          else {
            var Regex = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            if (!Regex.test(value)) {
              callback(new Error('DNS地址格式不正确！'))
            } else {
              callback();
            }
          }
        };

        var validatorcontent =(rule,value,callback)=>{
          if (value==''){
            callback(new Error('请输入集群描述'))
          }
          else
          callback();
        };

        var validatename = (rule,value,callback)=>{
          if (value==''){
            callback(new Error('请输入新的集群名称'))
          }
          else
          callback()
        };
        var validatorpwd = (rule,value,callback)=>{
          if (value === '') {
            callback(new Error('请输入密码'));
          }
          else {
            this.$axios.post('http://192.168.2.67:8000',{'password':value}).then(res=>{
              if (res.data=='1'){
                callback()
              }
              else {
                callback(new Error('输入密码错误'))
              }
            }).catch(error=>{
              console.log(error)
            })
          }
        };
        var validatornpwd = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.newpwdt !== '') {
              this.$refs.ruleForm2.validateField('newpwdt');
            }
            else {
              callback();
            }
          }
        };
        var validatornpwdt = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.newpwd) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return{
          user:'admin',
          dialogVisible:false,
          name:'',
          cluster_ip:'',
          node_num:'',
          ruleForm2: {
            cluster_name:'',
            // ipaddress: '',
            gateway: '',
            fdns: '',
            sdns:'',
            content:'',
            pwd:'',
            newpwd:'',
            newpwdt:'',

          },
          cluster_info:[],
          net_info:[],
          rules2: {
            // ipaddress: [
            //   { validator: validateip, trigger: 'blur' }
            // ],
            gateway: [
              { validator: validategw, trigger: 'blur' }
            ],
            fdns: [
              { validator:validatedns, trigger: 'blur' }
            ],
            sdns: [
              {  validator:validatedns2, trigger: 'blur' }
            ],
            cluster_name:[
              { validator:validatename ,trigger:'blur'}
            ],
            content: [
              { validator: validatorcontent, trigger: 'blur' }
            ],

            pwd:[
              { validator:validatorpwd, trigger: 'blur'}
            ],
            newpwd:[
              { validator:validatornpwd, trigger: 'blur'}
            ],
            newpwdt:[
              { validator:validatornpwdt, trigger: 'blur'}
            ],

          },

        }
      },
      mounted(){
          // var _this=this
          // this.$axios.get('').then(res=>{
          //   _this.name=''
          //   _this.cluster_ip=''
          //   _this.node_num=''
          //   console.log(res)
          // }).catch(error=>{
          //   console.log(error)
          // })
      },
      methods:{
        submitform(formName) {
          var Self = this;
          this.$refs[formName].validate(function (valid) {
            if (valid) {
              if (Self.who=='network'){
                Self.$axios.post(Self.host+'moniter/networkupdata/',{ip:Self.network.IP,gw:Self.ruleForm2.gateway,fdns:Self.ruleForm2.fdns,sdns:Self.ruleForm2.sdns}).then(res=>{
                  if (res.data=='OK'){
                    $('#tooltip').css({display:'table'})
                    setTimeout(function () {
                      $('#tooltip').css({display:'none'})
                    },3000)
                  }
                  else {
                    $('#errortip').css({display:'table'})
                    setTimeout(function () {
                      $('#errortip').css({display:'none'})
                    },3000)
                    return false;
                  }
                }).catch(error=>{
                  console.log(error)
                })
              }
              else if(Self.who=='cluster'){
                Self.$axios.post(Self.host+'moniter/cltupdata/',{content:Self.ruleForm2.content,name:Self.ruleForm2.cluster_name,old:Self.cluster.clustername}).then(res=>{
                  if (res.data=='OK'){
                    $('#tooltip').css({display:'table'})
                    setTimeout(function () {
                      $('#tooltip').css({display:'none'})
                    },3000)
                  }
                  else {
                    $('#errortip').css({display:'table'})
                    setTimeout(function () {
                      $('#errortip').css({display:'none'})
                    },3000)
                    return false;
                  }
                }).catch(error=>{
                  console.log(error)
                })
              }
              else if (Self.who=='password'){
                Self.$axios.post('',{name:Self.ruleForm2.content,pwd:Self.ruleForm2.pwd,newpwd:Self.ruleForm2.newpwd}).then(res=>{
                  if (res.data=='OK'){
                    $('#tooltip').css({display:'table'})
                    setTimeout(function () {
                      $('#tooltip').css({display:'none'})
                    },3000)
                  }
                  else {
                    $('#errortip').css({display:'table'})
                    setTimeout(function () {
                      $('#errortip').css({display:'none'})
                    },3000)
                    return false;
                  }
                }).catch(error=>{
                  console.log(error)
                })
              }

            }
          });

        },

        resetform(formName) {
          this.$refs[formName].resetFields();
        },

      }
    }
</script>

<style scoped>

</style>
