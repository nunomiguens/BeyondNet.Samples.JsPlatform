import Vue from 'vue'
import FancyHeading from '@/components/FancyHeading.vue'

function mountComponentWithProps(component, propsData) {
    const Constructor = Vue.extend(component)
    const vm = new Constructor({
        propsData
    }).$mount();

    return vm.$el;
}

describe('FancyHeading.vue', () =>{
    test('should be the correct color',() => {
        const headingData = mountComponentWithProps(FancyHeading, { color: 'red'})
        const styleData = headingData.style.getPropertyValue('color')
        
        expect(styleData).toEqual('red');
    })

    test('should have the correct title', () => {
        const headingData = mountComponentWithProps(FancyHeading, { title: 'Hello, Vue!' });
        const titleData = headingData.textContent;
    
        expect(titleData).toEqual('Hello, Vue!');
      })
})