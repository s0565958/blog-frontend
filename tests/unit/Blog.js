import { mount } from '@vue/test-utils'
import Blog from '@/views/Blog.vue'
import Bloglist from '@/components/Bloglist.vue'
import BlogCreate from '@/components/BlogCreate.vue'

describe('Testing Blog.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Blog)

    // then
    expect(wrapper.text()).toMatch('Blog')
  })

  it('should have Blog list component', () => {
    // when
    const wrapper = mount(Blog)

    // then
    const blogList = wrapper.findComponent(Bloglist)
    expect(blogList.exists()).toBeTruthy()
  })

  it('should have Blog create form component', () => {
    // when
    const wrapper = mount(Blog)

    // then
    const create = wrapper.findComponent(BlogCreate)
    expect(create.exists()).toBeTruthy()
  })
})
