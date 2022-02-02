import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

const routes = [
  {
    path: '/',
    name: 'ItemListPage',
    component: ItemListPage,
  },
  {
    path: '/items/:productNo',
    name: 'ItemInfoPage',
    component: ItemInfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  if (to.name === 'ItemInfoPage' && from.name === 'ItemListPage') router.go();
});

export default router;
