import { mount } from '@vue/test-utils';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

describe('ReviewInfoPage', () => {
  const wrapper = mount(ReviewInfoPage);

  test('renders review data', async () => {
    const review_no = 1, writer = "lk***", title = "만족해요",
      content = "핏이 아주 잘 맞습니다. 대만족!", likes_count = 7, created = "2021. 12. 04",
      img = "https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/example.jpg";

      await wrapper.setProps({
      reviewInfo: [
        {
          review_no: review_no,
          writer: writer,
          title: title,
          content: content,
          likes_count: likes_count,
          created: created,
          img: img,
        }
      ]
    });

    expect(wrapper.find('div[data-test="reviewWriter"]').text()).toBe(writer);
    expect(wrapper.find('div[data-test="reviewDate"]').text()).toBe(created);
    expect(wrapper.find('div[data-test="reviewTitle"]').text()).toBe(title);
    expect(wrapper.find('div[data-test="reviewContent"]').text()).toBe(content);
    expect(wrapper.find('img[data-test="reviewImage"]').attributes('src')).toBe(img);
  });
})
