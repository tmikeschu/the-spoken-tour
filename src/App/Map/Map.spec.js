import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

describe('<Map />', () => {
  it('renders the embedded map and side information', () => {
    const map = shallow(<Map />);
    expect(map.find('Legend').length).toEqual(1);
    expect(map.find('Info').length).toEqual(1);
    expect(map.find('SuggestionForm').length).toEqual(1);
    expect(map.find('SuggestionInfo').length).toEqual(1);
  });
});

