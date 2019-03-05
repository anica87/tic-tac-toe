import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from './Game';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow((<Game />));
});
