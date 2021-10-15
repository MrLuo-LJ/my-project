<template>
<div>
    <el-table
      :data="tableData" border
      style="width: 100%">
      <el-table-column
        prop="deptno"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="dname"
        label="部门名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="loc"
        label="地址"
        width="120"
        >
      </el-table-column>
      <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="deletel(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="page">
    </el-pagination>
    </div>
  </template>

  <script>
    export default {
    name:"DeptManager",
    methods:{
        page:function(currentPage){
            this.$http.get("http://localhost:8081/dept01/findAll/"+(currentPage-1)+"/6").
                then(resp=>{
                    console.log(resp);
                    this.tableData=resp.data.content;
                    this.pageSize=resp.data.size;
                    this.total=resp.data.totalElements;
                })
        },
        edit(row){
        this.$router.push({
          path:'/update',
          query:{
            deptno:row.deptno
          }
        });
      },
      deletel(row){
         this.$http.delete("http://localhost:8081/dept01/delete/"+row.deptno).
                then(resp=>{
                  if (resp.data=1) {
                        this.$alert("删除成功",'消息',{
                            confirmButtonText:'确定',
                            callback:action=>{
                                window.location.reload();
                            }
                        });
                    }
                })
      }
    },
      data() {
        return {
          pageSize:null,
          total:null,
          tableData: [{
            depton: '2016-05-02',
            dname: '王小虎',
            loc: '上海市普陀区金沙江路 1518 弄'
          }, {
            depton: '2016-05-04',
            dname: '王小虎',
            loc: '上海市普陀区金沙江路 1517 弄'
          }, {
            depton: '2016-05-01',
            dname: '王小虎',
            loc: '上海市普陀区金沙江路 1519 弄'
          }, {
            depton: '2016-05-03',
            dname: '王小虎',
            loc: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      created:function(){
           this.$http.get("http://localhost:8081/dept01/findAll/0/6").
                then(resp=>{
                    console.log(resp);
                    this.tableData=resp.data.content;
                    this.pageSize=resp.data.size;
                    this.total=resp.data.totalElements;
                })
      }
    }
  </script>