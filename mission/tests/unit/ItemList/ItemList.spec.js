import { flushPromises, mount } from '@vue/test-utils';
import ItemListPage from '@/views/Items/ItemList.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

const mockGetItemList = jest.fn();
const mockGetItemInfo = jest.fn();
jest.mock('@/clients/GetRepository', () => jest.fn().mockImplementation(() => ({ getItemList: mockGetItemList, getItemDetail: mockGetItemInfo })));

describe('ItemListPage', () => {
  beforeEach(() => {
    mockGetItemList.mockClear();
  });

  test('renders ItemListPage', async () => {
    mockGetItemList.mockResolvedValueOnce({ data: { items: [] } });
    const wrapper = mount(ItemListPage);
    await flushPromises();

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  test('renders product lists', async () => {
    const productList = [
      {
        name: 'product1',
        price: 198000,
        image: 'image1',
        original_price: 258000,
        description: 'description1',
      }, {
        name: 'product2',
        price: 100000,
        image: 'image2',
        original_price: 200000,
        description: 'description2',
      },
    ];

    mockGetItemList.mockResolvedValueOnce({ data: { items: productList } });
    const wrapper = mount(ItemListPage);
    await flushPromises();

    const itemWrapper = wrapper.findAllComponents(ItemListItem);
    expect(itemWrapper).toEqual(productList);
  });

  test("redirect to ItemInfoPage", async () => {
    const name = "핏이 좋은 수트", product_no = 'asdf1234',
    image = "https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png",
    price = 198000, original_price = 298000, description = "아주 잘 맞는 수트";

    const mockRoute = {
      params: {
        productNo: product_no,
      }
    }
    const mockRouter = {
      push: jest.fn()
    }

    const wrapper = mount(ItemListItem, {
      props: {
        isAuthenticated: true,
        name: name,
        price: price,
        image: image,
        original_price: original_price,
        description: description,
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      },
    });

    await wrapper.find('[data-test="productList"]').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith(`/items/${product_no}`);
  });
});
