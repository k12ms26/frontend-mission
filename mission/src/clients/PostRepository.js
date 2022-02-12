import Client from '@/clients/AxiosClient';

export default {
  addItemToCart(itemNo) {
    return Client.post('/cart', { itemNo });
  },
};
