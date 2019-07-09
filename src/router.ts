import Vue from 'vue';
import Router from 'vue-router';
import store from "./store/store";

import TopStories from './views/TopStories.vue';
import CodeExamples from './views/CodeExamples.vue';
import MyFavourites from './views/MyFavourites.vue';

Vue.use(Router);

class RouteMeta {
  title: string;

  constructor({title} : { title: string}) {
    this.title=title;
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories,
      meta: new RouteMeta({ title: 'Top Stores'})
    },
    {
      path: '/code-examples',
      name: 'code-examples',
      component: CodeExamples,
      meta: new RouteMeta({ title: 'Code Examples' })
    },
    {
      path: '/my-favourites',
      name: 'my-favourites',
      component: MyFavourites,
      meta: new RouteMeta({ title: 'Favourites' })
    }
  ],
});

// Runs before each of the route changes
router.beforeEach((to, from, next) => {
  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;
