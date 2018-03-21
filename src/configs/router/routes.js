/* View */
import App from '@VIEWS/app.vue';
import MainLayout from '@VIEWS/common/mainLayout.vue';
// import Index from '@VIEWS/index/index.vue';
// const Index = import(/* webpackChunkName: "index" */ '@VIEWS/index/index.vue');
export const appRoutes = [
  /* Example */
  // {
  //   path: '/components/:id?',
  //   component: Components,
  //   children: [
  //     {
  //       path: 'bar',
  //       components: {
  //         default: Bar,
  //         foo: Foo
  //       }
  //     }
  //   ]
  // }
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'index',
        name: 'index',
        title: '首页',
        //component: Index,
        component: resolve => {require(['../../views/index/index.vue'], resolve)},
        // component: resolve => require(['@VIEWS/index/index.vue'], resolve),
        // component: resolve => require([Index], resolve),
      }
    ]
  },
]
