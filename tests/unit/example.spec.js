import { shallowMount , mount } from '@vue/test-utils'
import sinon from 'sinon'
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '../../src/Counter.vue'
import {employee} from '../../src/api/employee'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Count組件檢查',()=>{
  // 將組件掛在至包裹器
  const wrapper = mount(Counter)

  it('檢查計數器是否存在', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 檢查按鈕元素
  it('檢查按鈕元素', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  //檢查交互
  it('檢查交互', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})

describe('employee Model 檢查',()=>{
  it('拿 200 元買套餐，預期會找 73 元', () => {
    expect(employee.makeChange(200,127)).toBe(73)
  })
})

function compare(forme,latter,callback){
  callback()
  callback()
  callback()
  return forme === latter
}

describe('Spy',()=>{
  it('呼叫次數',()=>{
    var nameList = ['Louis','Bill']
    var callback = sinon.spy()
    
    compare(nameList[0],nameList[1],callback)
    expect(callback.callCount).toEqual(3)
  })
})
// var assert = chai.assert;

// describe('AssertTest', function() {
//   var foo = 'Hello';
//   var bar = 'Hello';

//   it('should be equal', function() {
//     assert( foo === bar, 'foo is not bar');
//   });
// });

