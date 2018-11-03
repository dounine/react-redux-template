import {applyMiddleware, compose, createStore} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import epics from '../epics';
import reducers from '../reducers';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import middles from '../middles';
import {composeWithDevTools} from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(
    ...epics
);

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // blacklist: ['nav'],
    // whitelist: ['nav'],
};
const config = require('../config');
const isDev = config.model == 'dev';
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});
const comp = isDev ? composeEnhancers : compose;
const persistedReducer = persistReducer(persistConfig, reducers);
const configureStore = preloadedState => {
    let store = createStore(
        persistedReducer,
        preloadedState,
        comp(applyMiddleware(epicMiddleware, ...middles))
    );
    epicMiddleware.run(rootEpic);
    return store;
};

export default () => {
    let store = configureStore();
    let persistor = persistStore(store, null, () => {
        // console.log('persist complate')
    });
    return {store, persistor};
}
