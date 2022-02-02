import { mount, shallowMount } from '@vue/test-utils';
import StringItem from '@/components/StringItem.vue';

describe('StringItem.vue', () => {
  test('문자열 확인', async () => {
    const wrapper = mount(StringItem);

    const span = wrapper.find('span');
    await span.findAll('rotate-string');
    expect(span.text()).toBe('');
  });
});
