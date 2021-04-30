import Vuex from 'vuex'
import App from '@/App'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai';

describe('App.vue', () => {
    let wrapper;
    let store;
    let getters;
    
    const setUpWrapper = userName => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        
        getters = {
            getUser: () => {
              return userName;
            }
        };

        store = new Vuex.Store({
            getters
        });

        wrapper = shallowMount(App, {
            localVue,
            store,
            stubs: ['router-link', 'router-view']
        });
    };

    it ('Should show the user name', () => {
        setUpWrapper('Alberto Arroyo')
        
        expect(wrapper.html()).to.contain('Alberto Arroyo')
    })
})