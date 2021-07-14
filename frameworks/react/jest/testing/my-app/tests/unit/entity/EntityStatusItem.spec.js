import { createLocalVue, shallowMount } from '@vue/test-utils'
import EntityStatusItem from '@/components/EntityStatusItem'
import Vuetify from 'vuetify'

describe('EntityStatus.vue', () => {
    let wrapper
    let localVue = createLocalVue()
    let selected = false
    let status = {
        status: 'status1',
        icon: 'icon1',
        label: 'label1',
        value: 'value1'
      }

    beforeEach(() => {
        localVue.use(Vuetify)
        wrapper = shallowMount(EntityStatusItem, {
            localVue, propsData:{
                status, selected
            }
        })
    })

    it('renders a vue instance', () => {
        expect(wrapper).isVueInstance().toBe(true)

        // expect(shallowMount(EntityStatusItem, {
        //     localVue, propsData:{
        //         status, selected
        //     }
        // }).isVueInstance()).toBe(true)
    })

    // it ('display selected value', () => {
    //     wrapper.vm.$emit('onSelectStatus',status.status);
    //     expect(wrapper.vm.selected).toBe(true)
    // })
})