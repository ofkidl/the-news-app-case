import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import mTag from '../src/components/mTag/mTag.vue'

test('mount component', async () => {
    expect(mTag).toBeTruthy()

    const main = mount(mTag, {
        props: {
            text: 'Test',
        },
        provide: {
            loading: false
        }
    })

    const blank = mount(mTag, {
        provide: {
            loading: false
        }
    })
    expect(main.text()).toContain('Test')
    expect(blank.text().length).toBe(0)
})


