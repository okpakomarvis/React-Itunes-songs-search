import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './component/includes/header';
import Footer from './component/includes/footer';
import Content from './component/content/content';

configure({adapter: new Adapter()});

describe('<App /> ', ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<App />);
    })
    it('should render a <Header> Component  ', ()=> {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should render a  <Footer /> component ', ()=> {
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
    it('should render a <Content />', ()=> {
        expect(wrapper.find(Content)).toHaveLength(1);
    });
});