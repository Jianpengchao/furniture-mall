<<<<<<< HEAD
// //引入vue
// import Vue from 'vue';
// //引入vue-router
// import VueRouter from 'vue-router';
// //第三方库需要use一下才能用
// Vue.use(VueRouter)
// //引用page1页面
// import login  from '../views/login/login;
// import index  from '../views/index'
// import page1  from '../views/page1';
// //引用page2页面
// import page2  from '../views/page2';

// //定义routes路由的集合，数组类型
// const routes=[
//     //单个路由均为对象类型，path代表的是路径，component代表组件
//     {path:'/login',component:login},
//     {path:'/index', name: "index" ,component:index},
//     {path:'/page1',component:page1},
//     {path:"/page2",component:page2},
//      //可以配置重定向
//         {path:'/',redirect:"login"}
// ]

// //实例化VueRouter并将routes添加进去
// const router=new VueRouter({
// //ES6简写，等于routes：routes
//     routes
// });

// //抛出这个这个实例对象方便外部读取以及访问
// export default router
=======
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
>>>>>>> df4767e17f27d3c215d1fc485ffdacf14c69844b
