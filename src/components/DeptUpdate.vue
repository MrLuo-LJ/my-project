<template>
  <el-form :model="ruleFrom" ref="ruleFrom" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="编号" prop="deptno">
            <el-input v-model="ruleFrom.deptno" readonly></el-input>
        </el-form-item>
        <el-form-item label="部门名称" prop="dname">
            <el-input v-model="ruleFrom.dname" ></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="loc">
            <el-input v-model="ruleFrom.loc" ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitFrom('ruleFrom')">更新</el-button>
            <el-button @click="resetForm('ruleFrom')">取消</el-button>
        </el-form-item>
    </el-form>
    
</template>
<script>
export default {
    name:"DeptUpdate",
    data:function(){
        return {
            ruleFrom:{
                deptno:'',
                dname:'',
                loc:''
            },
            rules:{
                dname:  [
                    {required:true,message:'请输入部门名称:',trigger:'blur'},
                    {mix:3,max:5,message:'长度在3-5个字符',trigger:'blur'}
                ],
                loc:[
                    {required:true,message:'请输入部门地址:',trigger:'blur'},
                    {mix:3,max:5,message:'长度在3-5个字符',trigger:'blur'}
                ]
            }
        };
    },
    methods:{
        submitFrom(fromName){
            this.$refs[fromName].validate((valid)=>{
                if (valid) {
                    this.$http.put('http://localhost:8081/dept01/update',this.ruleFrom).then(resp=>{
                    if (resp.data='success') {
                        this.$alert("更新成功",'消息',{
                            confirmButtonText:'确定',
                            callback:action=>{
                                this.$router.push('/DeptManager')
                            }
                        });
                    }
                })
                }else{
                    return false;
                }
            })
        },
        resetForm(fromName){
            this.$refs[fromName].resetFields();
        }
    },
    created(){
        this.$http("http://localhost:8081/dept01/findById/"+this.$route.query.deptno).then(resp=>{
            this.ruleFrom=resp.data
        })
    }
}
</script>