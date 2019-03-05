import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Field from './Field';

configure({ adapter: new Adapter() });

describe('Field', () => {
  it('renders without crashing', () => {
    const field = shallow(<Field index="0" value="1" />);

    expect(field.hasClass('ttt-field')).toEqual(true);
  });
});
