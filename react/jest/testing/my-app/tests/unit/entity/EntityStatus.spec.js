import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import EntityStatus from '@/components/EntityStatus'
import EntityStatusItem from '@/components/EntityStatusItem'
import Vuetify from 'vuetify'


describe('EntityStatus.vue', () => {
    let wrapper
    let statuses = [{
        status: "status1",
        icon: "icon1",
        label: "label1",
        value: "value1"
      },{
        status: "status2",
        icon: "icon2",
        label: "label2",
        value: "value2"
      }]

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(Vuetify)

        wrapper = mount(EntityStatus, {
            localVue, propsData:{
                statuses
            }
        })
    })

    it('renders a vue instance', () => {
        expect(shallowMount(EntityStatus).isVueInstance()).toBe(true)
    })

    describe("checking statuses array object", () => {
        it('statuses containing correct array of status objects', () => {
            expect([{
                status: "status1",
                icon: "icon1",
                label: "label1",
                value: "value1"
              },{
                status: "status2",
                icon: "icon2",
                label: "label2",
                value: "value2"
              }]).toEqual(expect.arrayContaining(wrapper.vm.statuses))
        })
    
        it('does not match if received does not contain expected elements', () => {
            expect(['x', 'y']).not.toEqual(expect.arrayContaining(wrapper.vm.statuses));
        });
    })

    describe('checking EntityStatusItem child', () => {
        it("contain EntityStatusItem", () => {
            expect(wrapper.contains(EntityStatusItem)).toBe(true);
        })        

        it('test event emitted from EntityStatusItem', ()=>{
            wrapper.find(EntityStatusItem).vm.$emit('onSelectStatus', statuses[0].status);
            expect(wrapper.find(EntityStatusItem).emitted().onSelectStatus).toBeTruthy()
            expect(wrapper.vm.selectedStatus).toBe('status1')
        })
    }) 
})