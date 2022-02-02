import { mount } from '@vue/test-utils';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

describe('ReviewInfoPage', () => {
  const wrapper = mount(ReviewInfoPage);

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
})
