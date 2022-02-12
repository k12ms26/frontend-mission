import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/views/Menu.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';
import ItemListPage from '@/views/ItemList.vue';
import CartPage from '@/views/Cart.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Menu',
  //   component: Menu,
  // },
  {
    path: '/',
    component: Menu,
    children: [
      {
        path: '',
        component: ItemListPage,
      },
      {
        path: 'cart',
        component: CartPage,
      },
    ],
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

export default router;
