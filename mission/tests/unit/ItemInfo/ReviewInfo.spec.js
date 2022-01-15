import { mount, shallowMount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

describe('ReviewInfoPage', () => {
  const wrapper = mount(ReviewInfoPage);
  const itemInfoPageWrapper = mount(ItemInfoPage);

  test('renders review data', async () => {
    await wrapper.setProps({
      reviewInfo: [
        {
          nickname: 'hi',
          date: '2022-01-15',
          title: 'title',
          detail: 'detail',
          image: 'imageFile',
        }
      ]
    });

    expect(wrapper.find('div[data-test="reviewInfo"]').exists()).toBe(true);
  });

  test('check correct prop data from ItemInfoPage', async () => {
    await wrapper.setProps({
      reviewInfo: [
        {
          nickname: 'mk1111222',
          date: '2022-01-12',
          title: '좋아요',
          detail: '사진 그대로예요',
          image: '',
        },
        {
          nickname: 'minsun',
          date: '2022-01-12',
          title: '굿',
          detail: '휘뚜루마뚜루 입고다니기 좋습니다',
          image: '',
        },
      ]
    });

    expect(wrapper.vm.reviewInfo).toEqual(itemInfoPageWrapper.vm.reviewInfo);
  });
})
