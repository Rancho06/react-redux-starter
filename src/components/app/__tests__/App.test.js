// @flow
import React from 'react';
import { shallow } from 'enzyme';

import App from 'src/components/app/App.jsx';

test('smoke test', () => {
	shallow(<App />);
});
