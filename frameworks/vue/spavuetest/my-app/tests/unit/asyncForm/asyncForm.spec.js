import { mount } from '@vue/test-utils'
import AsyncForm from '@/components/AsyncForm'


describe('AsynForm.vue', () => {
    it ('Fetching some values', () =>{
        const wrapper = mount(AsyncForm)
        wrapper.find(`[data-prop="btnFetch"]`).trigger('click')
        console.log(wrapper.vm.value)
        // expect(wrapper.vm.value).to.equal('returning some values')
    })
})