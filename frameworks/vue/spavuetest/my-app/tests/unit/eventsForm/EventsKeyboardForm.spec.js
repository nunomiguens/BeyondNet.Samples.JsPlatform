import EventsKeyboardForm from '@/components/EventsKeyboardForm'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Key event tests', () => {
    it('Quantity is zero by default', () => {
      const wrapper = mount(EventsKeyboardForm)
      console.log(wrapper.vm.quantity)
      expect(wrapper.vm.quantity).to.equal(0)
    })
  
    it('Up arrow key increments quantity by 1', () => {
      const wrapper = mount(EventsKeyboardForm)
      wrapper.trigger('keydown.up')
      expect(wrapper.vm.quantity).to.equal(1)
    })
  
    it('Down arrow key decrements quantity by 1', () => {
      const wrapper = mount(EventsKeyboardForm)
      wrapper.vm.quantity = 5
      wrapper.trigger('keydown.down')
      expect(wrapper.vm.quantity).to.equal(4)
    })
  
    it('Escape sets quantity to 0', () => {
      const wrapper = mount(EventsKeyboardForm)
      wrapper.vm.quantity = 5
      wrapper.trigger('keydown.esc')
      expect(wrapper.vm.quantity).to.equal(0)
    })
  
    it('Magic character "a" sets quantity to 13', () => {
      const wrapper = mount(EventsKeyboardForm)
      wrapper.trigger('keydown', {
        key: 'a'
      })
      expect(wrapper.vm.quantity).to.equal(13)
    })
  })