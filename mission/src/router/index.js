import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/views/Menu.vue';
import ItemInfoPage from '@/views/Items/ItemInfo.vue';
import ItemListPage from '@/views/Items/ItemList.vue';
import CartPage from '@/views/Buy/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
    children: [
      {
        path: '',
        name: '판매 중인 상품',
        component: ItemListPage,
      },
      {
        path: 'cart',
        name: '장바구니',
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
