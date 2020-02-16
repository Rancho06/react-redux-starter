// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/components/App.jsx';
import StoreProvider from 'src/store/StoreProvider.js';
import rootReducer from 'src/store/rootReducer.js';

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(
		<Provider store={StoreProvider.getStore(rootReducer)}>
			<App />
		</Provider>,
		rootEl
	);
}
