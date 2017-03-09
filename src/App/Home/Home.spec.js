import React, { Component } from 'react';
import { Link } from 'react-router';
import { shallow, mount } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it ('renders without crashing', () => {
    const home = shallow(<Home />);
    expect(home).toBeTruthy();
  });

  it ('renders an image and a content div', () => {
    const home = shallow(<Home />);
    expect(home.find('img').length).toEqual(1);
    expect(home.find('.content').length).toEqual(1);
  });


  it ('renders a link to the landing page', () => {
    const home = shallow(<Home />);
    expect(home.find(Link).length).toEqual(1);

    const link = home.find(Link);
    expect(link.props().to).toEqual('/landing');
    expect(link.props().children).toEqual('Pedal to our site!');
  });
});

