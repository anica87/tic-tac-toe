import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Board from './Board';

configure({ adapter: new Adapter() });

describe('Board', () => {
  const fields = [
    0, 0, -1, 0, 1, 0, -1, 0, 0];

  it('renders without crashing', () => {
    shallow(<Board fields={fields} />);
  });
});
