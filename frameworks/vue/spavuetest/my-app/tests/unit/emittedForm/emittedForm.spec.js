import {shallowMount} from '@vue/test-utils'
import EmittedParentForm from '@/components/EmittedParentForm'
import EmittedChildForm from '@/components/EmittedChildForm'
import { expect } from 'chai'

describe('EmittedParentForm.vue', () => {
    it ("displays 'Emitted!' when custom event is emitted", () => {
        const wrapper = shallowMount(EmittedParentForm)
        wrapper.find(EmittedChildForm).vm.$emit('custom')
        expect(wrapper.html()).to.contain('Emitted!')
    })

    it ("display custom message when onCall event is emitted", () => {
        const wrapper = shallowMount(EmittedParentForm)

        wrapper.setData({complementMessage:'Changing the world!!!'})
        wrapper.find(EmittedChildForm).vm.$emit('on-call', { message: `I am Ronald Marrou`})
        expect(wrapper.html()).to.contain(`I am Ronald Marrou - Changing the world!!!`)
    })
})
 
