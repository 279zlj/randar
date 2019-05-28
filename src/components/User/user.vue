<template>
  <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20" id="user">

    <el-row>
      <Top_bar :who="now"></Top_bar>
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1" style="margin-top: -2em;">
        <el-row style="background-color: white;border-radius: .5em">
        <el-button type="primary" style="float: right;margin: 1em" round @click="addu()"><i class="el-icon-circle-plus"  style="font-size: small;"></i>添加</el-button>
          <el-alert type="success" id="msg" :title="msg" effect="dark" show-icon style="position: absolute;display: none" center></el-alert>
        <el-table :data="user_data.slice((currpage - 1) * pagesize, currpage * pagesize)"  height="500" style="width: 100%;border-radius: .5em;padding: 1em">

          <!--<el-table-column type="selection" width="100"></el-table-column>-->
          <el-table-column prop="groupID" label="组ID"></el-table-column>
          <el-table-column prop="groupname" label="用户名"></el-table-column>
          <el-table-column prop="story" label="用户描述"></el-table-column>
          <el-table-column prop="name" label="所属组名"></el-table-column>
          <el-table-column
            label="操作"
            width="300">
            <template slot-scope="scope">
              <!--<el-button type="text" size="small"><i class="el-icon-circle-plus"></i></el-button>-->
              <el-button type="text" size="small" @click="modifypwd(scope.row)"><el-tooltip class="item" effect="dark" content="修改密码" placement="bottom"><i class="el-icon-goods"></i></el-tooltip></el-button>
              <el-button type="text" size="small" @click="modify(scope.row)"><el-tooltip class="item" effect="dark" content="修改描述" placement="bottom"><i class="el-icon-edit"></i></el-tooltip></el-button>
              <el-button type="text" size="small" @click="udelete(scope.row)"><el-tooltip class="item" effect="dark" content="删除" placement="bottom"><i class="el-icon-error"></i></el-tooltip></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pagesize"
          :total="user_data.length" style="text-align: right;margin: 1em">
        </el-pagination>
        </el-row>
      </el-col>
      <el-dialog title="添加用户" :visible.sync="adduser" width="30%">
        <el-form :model="formdata" status-icon :rules="rules" ref="formdata" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user">
            <el-input type="text" v-model="formdata.user" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="formdata.pwd" auto-complete="off" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="surepwd">
            <el-input type="password" v-model="formdata.surepwd" auto-complete="off" show-password></el-input>
          </el-form-item>
          <el-form-item label="用户描述" prop="content">
            <el-input type="text" v-model="formdata.content" auto-complete="off" show-></el-input>
          </el-form-item>
          <el-form-item class="dialog-footer" >
            <el-button @click="adduser=false">取消</el-button>
            <el-button type="primary" @click="senduser('formdata')">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="用户描述修改" :visible.sync="modifyuser" width="30%">
        <el-form ref="formdata" :model="formdata" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名">
            <span>{{selectname}}</span>
          </el-form-item>
          <el-form-item label="描述" prop="content">
            <el-input type="text" v-model="formdata.content"></el-input>
          </el-form-item>
          <el-form-item class="dialog-footer">
            <el-button @click="modifyuser=false">取消</el-button>
            <el-button type="primary" @click="sendmodify()">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="用户密码修改" :visible.sync="modifypass" width="30%">
        <el-form ref="formdata" :model="formdata" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名">
            <span>{{selectname}}</span>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="formdata.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="surepwd">
            <el-input type="password" v-model="formdata.surepwd" show-password></el-input>
          </el-form-item>
          <el-form-item class="dialog-footer">
            <el-button @click="modifypass=false">取消</el-button>
            <el-button type="primary" @click="sendpwd()">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="删除用户" :visible.sync="userdelete" width="30%">
        <span>删除用户：{{selectname}}</span>
        <div slot="footer" class="dialog-footer">
          <el-button @click="userdelete=false">取消</el-button>
          <el-button type="primary" @click="senddelete()">确认</el-button>
        </div>
      </el-dialog>
    </el-row>
  </el-col>
</template>

<script>
  import Top_bar from "../share/top_bar";
    export default {
        name: "user",
      components: {Top_bar},
      data(){
        var validateuser = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            if (value.length<3||value.length>10) {
              callback(new Error('请输入用户名长度大于3小于10'))
            }
            callback();
          }
        };
        var validatepwd = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.formdata.surepwd !== '') {
              this.$refs.formdata.validateField('surepwd');
            }
            callback();
          }
        };
        var validatepwd2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.formdata.pwd) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var validatcontent = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户描述'));
          } else {
            callback();
          }
        };
          return{
            now:'用户管理',
            user_data:[],
            pagesize: 5,
            currpage: 1,
            adduser:false,
            modifyuser:false,
            modifypass:false,
            userdelete:false,
            selectname:'',
            formdata:{
              user:'',
              pwd:'',
              surepwd:'',
              content:''
            },
            rules:{
              user:[
                {validator:validateuser, trigger:'blur'}
              ],
              pwd:[
                { validator:validatepwd, trigger: 'blur'}
              ],
              surepwd:[
                { validator:validatepwd2, trigger: 'blur'}
              ],
              content:[
                { validator:validatcontent, trigger: 'blur'}
              ],
            },
            chosse: [],
            msg:''
          }
      },
      mounted(){
        this.start()
      },
      methods:{
          start(){
            var _this=this
            this.$axios.get(_this.host+'monitor/select').then(res=>{
              _this.user_data=res.data
            }).catch(error=>{
              console.log(error)
            })
          },
        handleCurrentChange(cpage) {
          this.currpage = cpage;
        },
        handleSizeChange(psize) {
          this.pagesize = psize;
        },
        addu(){
          this.adduser = true
          this.resetform('formdata')
        },
        senduser(name){
          var Self = this;
          this.$refs[name].validate(function (valid) {
            if (valid) {
              Self.$axios.post(Self.host+'monitor/add',JSON.stringify(Self.formdata)).then(res=>{
                if (res.data.status=='OK'){
                  Self.msg='操作成功'
                }
                else {
                  Self.msf='操作失败'
                }
                Self.adduser=false
                Self.start()
                $('#msg').css('display', 'inline-flex')
                setTimeout(function () {
                  $('#msg').css('display', 'none')
                }, 2000)
              }).catch(error=>{
                console.log(error)
              })


            } else {
              console.log('error submit!!');

              return false;
            }
          })
        },
        resetform(formName) {
          this.$refs[formName].resetFields();
        },
        modify(row){
          this.modifyuser=true
          this.selectname=row.name
        },
        modifypwd(row){
          this.modifypass=true
          this.selectname=row.name
        },
        sendmodify(){
          var _this=this
          this.$axios.post(_this.host+'monitor/modify',{user:this.selectname,content:this.formdata.content,password:''}).then(res=>{
            if (res.data=='OK') {
              _this.msg='操作成功'
            }
            else {
              _this.msg='操作失败'
            }
            _this.modifyuser=false
            _this.start()
            $('#msg').css('display', 'inline-flex')
            setTimeout(function () {
              $('#msg').css('display', 'none')
            }, 2000)

            _this.selectname=''
            _this.content=''
          }).catch(error=>{
            console.log(error)
          })
        },
        sendpwd(){
          var _this=this
          this.$axios.post(_this.host+'monitor/modify',{user:this.selectname,content:'',password:this.formdata.pwd}).then(res=>{
            if (res.data.status=='OK') {
              _this.msg='操作成功'
            }
            else {
              _this.msg='操作失败'
            }
            _this.modifypass=false
            _this.start()
            $('#msg').css('display', 'inline-flex')
            setTimeout(function () {
              $('#msg').css('display', 'none')
            }, 2000)

            _this.selectname=''
            _this.content=''
          }).catch(error=>{
            console.log(error)
          })
        },
        udelete(row){
          this.userdelete=true
          this.selectname=row.name
        },
        senddelete(){
          var _this=this
          this.$axios.post(_this.host+'monitor/delete',{user:this.selectname}).then(res=>{
            if (res.data.status=='OK'){
              _this.msg='操作成功'
            }
            else {
              _this.msg='操作失败'
            }
            _this.userdelete=false
            _this.start()
            $('#msg').css('display', 'inline-flex')
            setTimeout(function () {
              $('#msg').css('display', 'none')
            }, 2000)

            _this.selectname=''
          }).catch(error=>{
            console.log(error)
          })
        }
      }
    }
</script>

<style scoped>
  #user{
    height: 100%;
    background-color: #EBECF1;
  }
  i{
    font-size: 1.8em;
  }
</style>
