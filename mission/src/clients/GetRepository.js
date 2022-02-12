import Client from '@/clients/AxiosClient';

const itemResource = '/item';

export default {
  getItemList() {
    return Client.get(`${itemResource}`);
  },
  getItemDetail(itemNo) {
    return Client.get(`${itemResource}/${itemNo}`);
  },
  getCartList() {
    return Client.get('/cart');
  }
};
