import React from 'react';
import { shallow } from 'enzyme';

import Left from '../src/components/left';

test('Left component should render', () => {

  const wrapper = shallow(<Left className="left-component"/>);

  expect(wrapper.find('.left-component').exists().to.be(true));

});