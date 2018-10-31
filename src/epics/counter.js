import 'rxjs/Rx';
import axios from 'axios';
import * as Observable from "rxjs-compat";

const fetchUserEpic = action$ =>
  action$.ofType("Navigation/BACK1")
    .switchMap(action =>Observable.fromPromise(axios.get(`https://api.github.com/search/users?q=`)))
    // .map(response => actions.fetchUserSuccess(response.data))
    // .catch(error => Observable.of(actions.fetchUserFailed(error)));

export default [fetchUserEpic];