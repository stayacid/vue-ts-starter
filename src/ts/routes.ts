// cams
const Example = () => import('../components/pages/Example.vue'); // lazy loading

export default [
  {
    path: '/', // this is url
    component: Example,
    /* children: [{
      path: '',
      component: Pluged,
    }, {
      path: 'merge',
      component: Merge,
    }], */
  },
  /* {
    path: '/', 
    redirect: '/cams',
  }, */
  {
    path: '*', // like 404
    redirect: '/',
  },
];
