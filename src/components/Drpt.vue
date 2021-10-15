<template>
  <div>
      <table>
          <tr>
              <td>编号</td>
              <td>部门名称</td>
              <td>地址</td>
          </tr>
          <tr v-for="item in depts" :key="item.deptno">
              <td>{{item.deptno}}</td>
              <td>{{item.dname}}</td>
              <td>{{item.loc}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
        depts: [
        
      ]
    }
  },
  created:function(){
      this.$http.get('http://localhost:8081/dept01/findAll').then(resp=>{
          this.depts=resp.data;
      })
  }
}
</script>

