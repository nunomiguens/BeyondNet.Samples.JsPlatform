import { mount } from '@vue/test-utils'
import CounterForm from '@/components/CounterForm.vue'
import { expect } from 'chai'

describe('CounterForm.vue', () => {
  const wrapper = mount(CounterForm)

  it('renders the correct markup', () => {
      expect(wrapper.html()).contain('<span class="count">0</span>')
    })

  it('has a button', () => {
      expect(wrapper.contains('button')).to.be.true
  })

  it ('button click should increment the count', () => {
    expect(wrapper.vm.count).to.equal(0)
    const incrementButton = wrapper.find(`[data-name="txtIncrement"]`);
    expect(incrementButton).not.null;
    console.log('Button',incrementButton.html())
    incrementButton.trigger('click')
    expect(wrapper.vm.count).to.equal(1)
  })
})
