import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Temperature from '@/components/Temperature.vue'
import vuetify from 'vuetify'
import ZipCodeInput from '@/components/ZipCodeInput.vue'

describe('Temperature.vue', () => {
    let wrapper
    let title = 'Weather App'

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(vuetify)
        wrapper = shallowMount(Temperature, {localVue})
    })

    it('renders a vue instance', () => {
        expect(shallowMount(Temperature).isVueInstance()).toBe(true)
    })

    it('checks the data-tile', () => {
        expect(wrapper.vm.title).toMatch('Weather App')
    })

    it('hasan h2', () => {
        expect(wrapper.contains('h2')).toBe(true)
    })

    it('check if child ZipCodeInput exists', ()=>{
        expect(wrapper.contains(ZipCodeInput)).toBe(true);
    })

    it('test event emitted from ZipCodeInput', ()=>{
        wrapper.find(ZipCodeInput).vm.$emit('save');
        expect(wrapper.find(ZipCodeInput).emitted().save).toBeTruthy()
    })

})