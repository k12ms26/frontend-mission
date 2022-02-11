import Client from '@/clients/AxiosClient';

const resource = '/item';

export default {
  getItemList() {
    return Client.get(`${resource}`);
  },
  getItemDetail(itemNo) {
    return Client.get(`${resource}/${itemNo}`);
  },
  // MANY OTHER ENDPOINT RELATED STUFFS
};
