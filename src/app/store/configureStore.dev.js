import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
// import GlobalFetch from '../middleware/GlobalFetch'
import rootReducer from '../reducers'
import settingMiddleware from "../middlewares/settingMiddleware"



import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'


export default function configureStore(preloadedState){
	const store= createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware(thunk,settingMiddleware),
			DevTools.instrument()
		)
	)
	// debugger

	if (module.hot) {
		let nr=require('../reducers').default
		debugger
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', () => {
	      const nextRootReducer = require('../reducers').default
	      debugger
	      store.replaceReducer(nextRootReducer)
	    })
	  }
	return store;
}



