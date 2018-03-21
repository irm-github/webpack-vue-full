/* View */
import App from '@VIEWS/app.vue';
import MainLayout from '@VIEWS/common/mainLayout.vue';
const Index = ()=>import(/* webpackChunkName: "index" */ '@VIEWS/index/index.vue').then(m=>m.default);


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
        component: Index,
      }
    ]
  },
]
