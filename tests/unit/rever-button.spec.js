import { shallowMount } from '@vue/test-utils';
import ReverButton from '@/components/ReverButton.vue';
import ButtonPageObject from '../pageObjects/ReverButton.po';

describe('ReverButton.vue', () => {
  describe('Button', () => {
    const mountButton = (options = {}) => {
      const wrapper = shallowMount(ReverButton, {
        propsData: {
          onClick: options.onClickStub || jest.fn(),
          type: options.type,
        },
      });
      return new ButtonPageObject(wrapper);
    };

    it('renders as primary button', () => {
      const button = mountButton({ type: 'primary' });

      expect(button.isPrimary()).toBe(true);
    });

    it('renders as warning button', () => {
      const button = mountButton({ type: 'warning' });

      expect(button.isWarning()).toBe(true);
    });

    it('renders as danger button', () => {
      const button = mountButton({ type: 'danger' });

      expect(button.isDanger()).toBe(true);
    });
  });

  describe('Snapshot', () => {
    it('should render content correctly', () => {
      const wrapper = shallowMount(ReverButton, {
        propsData: {
          onClick: jest.fn(),
        },
      });

      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });
});
