import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import mItem from '../src/components/mItem/mItem.vue'
import mTag from '../src/components/mTag/mTag.vue'

test('Not empty text', async () => {
    expect(mItem).toBeTruthy()

    const main = mount(mItem, {
        props: {
            post: {
                title: 'Test',
                free: true,
                id: 2,
            },
            loading: false,
        },
    })
    expect(main.text()).toContain('Test')
})

test('Empty text', async () => {
    expect(mItem).toBeTruthy()

    const main = mount(mItem, {
        props: {
            post: {
                title: 'Test',
                free: true,
                id: 2,
            },
            loading: true,
        },
    })
    expect(main.text()).not.toContain('Test')
})

test('Marked as a paid article', async () => {
    expect(mItem).toBeTruthy()

    const main = mount(mItem, {
        props: {
            post: {
                title: 'Test',
                free: false,
                id: 2,
            },
            loading: false,
        },
    })
   expect(main.findComponent(mTag).props().text).toBe('$$$');
})

test('Marked as a enabled paid article', async () => {
    expect(mItem).toBeTruthy()

    const main = mount(mItem, {
        props: {
            post: {
                title: 'Test',
                free: false,
                paid: true,
                id: 2,
            },
            loading: false,
        },
    })
    expect(main.findComponent(mTag).props().text).toBe('paid');
})

test('No tag for free article', async () => {
    expect(mItem).toBeTruthy()

    const main = mount(mItem, {
        props: {
            post: {
                title: 'Test',
                free: true,
                id: 2,
            },
            loading: false,
        },
    })
   expect(main.findComponent(mTag).exists()).toBe(false);
})
