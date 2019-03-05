import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Score from './Score';

configure({ adapter: new Adapter() });

describe('Score', () => {
  it('calls changePlayerX  Redux action creator with button click', () => {
    const props = {
      label: jest.fn(),
    };
    // TODO refactor
    const wrapper = shallow(<Score {...props} />);
    wrapper.find('.ttt-score--edit').simulate('click');

    wrapper.find('input').simulate('change', { currentTarget: { value: 'PLAYER' } });

    wrapper.find('.ttt-score--edit').simulate('click');

    expect(props.label).toHaveBeenCalledWith({ text: 'PLAYER' });
  });
});
