<template>
    <div>   
        <el-container style="height=500px;border:1px soild #eee">
            <el-aside width="200px" style="backgroud-color:rgb(283,241,246)">
                <!-- Aside content -->
                <el-menu router :default-openeds="['0']">
                    <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" :key="index">
                         <template slot="title"><i class="el-icon-s-platform"></i>{{item.name}}</template>
                    <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" :class="$route.path==item2.path?'is-active':''" :key="index2">{{item2.name}}</el-menu-item> 
                    </el-submenu>  
                </el-menu>
            </el-aside>
            <el-container >
                <el-main>
                    <!-- Main content -->
                    <router-view/>
                </el-main>                
             </el-container>           
        </el-container>
    </div>
</template>
<script>
export default {

  data(){
    const item={
      date:'2016-5-2',
      name:'小米',
      address:'sssss'
    };
    return{
      tableData:Array(5).fill(item)
    }
  }
}
</script>