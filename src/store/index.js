import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let time=[]
let memory=[]
let cpu=[]
let disktime=[]
let idisk=[]
let odisk=[]

try {
  if (localStorage.time)
    time=JSON.parse(localStorage.time)
  if (localStorage.memory)
    memory=JSON.parse(localStorage.memory)
  if (localStorage.cpu)
    cpu=JSON.parse(localStorage.cpu)
  if (localStorage.disktime)
    time=JSON.parse(localStorage.disktime)
  if (localStorage.idisk)
    memory=JSON.parse(localStorage.idisk)
  if (localStorage.odisk)
    cpu=JSON.parse(localStorage.odisk)


}
catch (e) {

}
const store =new Vuex.Store({
  state:{
    time:time,
    memory:memory,
    cpu:cpu,
    disktime:disktime,
    idisk:idisk,
    odisk:odisk
  },
  mutations:{
    use(state,msg){
      if (state.time.length>20){
        state.time.splice(0,1)
        state.cpu.splice(0,1)
        state.memory.splice(0,1)
      }
      state.time=msg.time;
      state.cpu=msg.cpu;
      state.memory=msg.memory;
      localStorage.time=JSON.stringify(msg.time)
      localStorage.memory=JSON.stringify(msg.memory)
      localStorage.cpu=JSON.stringify(msg.cpu)
    },
    disk(state,msg){
      if (state.disktime.length>20){
        state.disktime.splice(0,1)
        state.idisk.splice(0,1)
        state.odisk.splice(0,1)
      }
      state.disktime=msg.disktime;
      state.idisk=msg.idisk;
      state.odisk=msg.odisk;
      localStorage.disktime=JSON.stringify(msg.disktime)
      localStorage.idisk=JSON.stringify(msg.idisk)
      localStorage.odisk=JSON.stringify(msg.odisk)
    }
  }
})
export default store
