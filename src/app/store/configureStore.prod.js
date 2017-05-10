import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import GlobalFetch from '../middleware/GlobalFetch'
import rootReducer from '../reducers'
import settingMiddleware from "../middlewares/settingMiddleware"



export default function configureStore(preloadedState){
	return createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunk,settingMiddleware)
	)
}

