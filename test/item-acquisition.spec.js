import { mount } from '@vue/test-utils'
import ZeldaItemAcquisitionList from '@/components/item-acquisition.vue'

describe('ZeldaItemAcquisitionList', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ZeldaItemAcquisitionList)
        expect(wrapper.vm).toBeTruthy()
    })
})
