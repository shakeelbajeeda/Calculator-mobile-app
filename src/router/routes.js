
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'first_calculator', component: () => import('pages/first_calculator.vue') },
      { path: 'second_calculator', component: () => import('pages/second_calculator.vue') },
      { path: 'third_calculator', component: () => import('pages/third_calculator.vue') },


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
