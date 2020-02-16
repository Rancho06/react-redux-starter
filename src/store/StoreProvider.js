// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

let storeSingleton;
/**
 * Redux store provider
 */
export default class StoreProvider {
	/**
	 * Note: it always returns the same singleton redux store.
	 *
	 * Example Usage:
	 * 		<Provider store={StoreProvider.getStore(rootReducer)}>
	 * 			<App />
	 * 		</Provider>
	 */
	static getStore(reducer: *) {
		return (
			storeSingleton ||
			(storeSingleton = compose(
				applyMiddleware(thunkMiddleware),
				window.devToolsExtension ? window.devToolsExtension() : (f) => f
			)(createStore)(reducer))
		);
	}
}
