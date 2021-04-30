import BasicForm from '@/components/BasicForm.vue';
import {shallowMount} from '@vue/test-utils';
import { expect } from 'chai';

describe('BasicForm.vue Basic Validations', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(BasicForm);
    });

    it('should render correct contents', () => {
      expect(wrapper.html()).to.contain('Do you agree?');
    });

    it('should have the "VALIDATE" button enabled', () => {      
      const validateButton = wrapper.find(`v-btn-stub[color="success"]`);
      expect(validateButton).not.null;
      expect(validateButton.props('disabled')).to.be.false;      
    });

    it ('should have the "RESET FORM" button enabled', () => {
      const resetButton = wrapper.find(`v-btn-stub[color="error"]`)
      
      expect(resetButton).not.null;
      expect(resetButton.props('disabled')).to.be.false;      
    })

    it ('should have the "RESET VALIDATION" button enabled', () => {
      const resetButton = wrapper.find(`v-btn-stub[color="warning"]`)
      
      expect(resetButton).not.null;
      expect(resetButton.props('disabled')).to.be.false;     
    })

    it ('Only for logs', () => {
      // console.log('wrapper', wrapper.html());
      console.log('wrapper emitted events', wrapper.emitted());
    } )
});

