import EventsForm from '@/components/EventsForm'
import { mount } from '@vue/test-utils'
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

describe('Click event', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
      const spy = sinon.spy()
      const wrapper = mount(EventsForm, {
        propsData: {
          callMe: spy
        }
      })

      wrapper.find(`[data-prop="btnYes"]`).trigger('click')
      spy.should.have.been.calledWith('yes')
    })
  })