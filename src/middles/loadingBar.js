import {loadingBarMiddleware} from 'react-redux-loading-bar'

const loadingBar = loadingBarMiddleware({
    promiseTypeSuffixes: ['Request', 'Success', 'Failed'],
});

export default loadingBar;