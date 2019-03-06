import React from 'react';
import Enzyme, { shallow } from "enzyme";
import ReactDOM from 'react-dom';
import Login from './Login';
import Adapter from "enzyme-adapter-react-16";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({adapter: new Adapter()});

describe("Textbox value should be altered when text is input", () => {
  it('value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField1'}).simulate('change', { target: { value: 'John'}})
    let input = wrapper.find('#registerField1').props().value;
    expect(input).toBe("John")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField2'}).simulate('change', { target: { value: 'Smith'}})
    let input = wrapper.find('#registerField2').props().value;
    expect(input).toBe("Smith")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField3'}).simulate('change', { target: { value: 'jsmith@gmail.com'}})
    let input = wrapper.find('#registerField3').props().value;
    expect(input).toBe("jsmith@gmail.com")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField4'}).simulate('change', { target: { value: '78asdb*&811s'}})
    let input = wrapper.find('#registerField4').props().value;
    expect(input).toBe("78asdb*&811s")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField5'}).simulate('change', { target: { value: 'Analyst'}})
    let input = wrapper.find('#registerField5').props().value;
    expect(input).toBe("Analyst")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'registerField6'}).simulate('change', { target: { value: 'High'}})
    let input = wrapper.find('#registerField6').props().value;
    expect(input).toBe("High")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'loginField1'}).simulate('change', { target: { value: 'jsmith@gmail.com'}})
    let input = wrapper.find('#loginField1').props().value;
    expect(input).toBe("jsmith@gmail.com")
  })

  it('Value should equal textbox', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({id: 'loginField2'}).simulate('change', { target: { value: '78asdb*&811s'}})
    let input = wrapper.find('#loginField2').props().value;
    expect(input).toBe("78asdb*&811s")
  })

})

describe("Testing OnClick funtions", () =>{
  it('The login button should call the fetch function', () =>{
    const wrapper = shallow(<Login onRegister={jest.fn()}/>);
    wrapper.instance().onRegister= jest.fn()
    wrapper.instance().forceUpdate();
    wrapper.update()
    wrapper.find('#registerButton').simulate('click')
    expect(wrapper.instance().onRegister).toHaveBeenCalled();
  })

  it('The register button should call the fetch function', () => {
    const wrapper = shallow(<Login onRegister={jest.fn()}/>);
    wrapper.instance().onRegister= jest.fn()
    wrapper.instance().forceUpdate();
    wrapper.update()
    wrapper.find('#registerButton').simulate('click')
    expect(wrapper.instance().onRegister).toHaveBeenCalled()
  })
})




