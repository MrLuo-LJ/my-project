import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import DeptManager from '../components/DeptManager.vue'
import PageTwo from '../components/AddDept.vue'
import DeptUpdate from '../components/DeptUpdate.vue'
import axios from 'axios'
Vue.prototype.$http=axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '部门管理',
      component: Index,
      redirect:'/DeptManager',
      children:[
        {
          path:'/DeptManager',
          name:'部门查询',
          component:DeptManager
        },{
          path:'/AddDept',
          name:'添加部门',
          component:PageTwo
        },{
          path:'/update',
          component:DeptUpdate
        }
      ]
      
    }
  ]
})
