import 'rxjs/Rx';
import '../rx/extends';
import axios from 'axios';
import {Observable} from 'rxjs/Rx';
import {types, actions} from "../reducers/app";

export const apis = {
    searchApi:(name)=>axios.get(`https://api.github.com/search/users?q=${name}`)
};

const search = action$ =>
    action$.ofType(types.changeText)
        .debounceTime(1000) //去网络抖动
        .switchMap(action => Observable.fromPromise(apis.searchApi(action.payload.text)))
        .retryWithDelay(3, 2000)
        .map(response => actions.searchSuccess(response.data))
        .catch(error => Observable.of(actions.searchFailed(error)));

export default [search];