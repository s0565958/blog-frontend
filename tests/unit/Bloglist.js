import { mount } from '@vue/test-utils'
import Bloglist from '@/components/Bloglist'

describe('Testing Bloglist.vue', () => {
  it('should render a Blog card for each Blog', () => {
    // when
    const wrapper = mount(Bloglist, {
      propsData: {
        persons: [
          {
            id: 1,
            username: 'JohnJH',
            title: 'Messi',
            content: 'Sport',
            Body: 'Messi'
          },
          {
            id: 2,
            username: 'FredJH',
            title: 'CR7',
            content: 'Sport',
            Body: 'CR7'
          }
        ]
      }
    })

    // then
    const blog = wrapper.findAllComponents(Blog)
    expect(blog.length).toBe(2)
  })
})
