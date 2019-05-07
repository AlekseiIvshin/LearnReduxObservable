import { Types } from "./actions";
import { ofType } from "redux-observable";
import {map} from 'rxjs/operators';

export const mainEpic = action$ => action$.pipe(
    ofType(Types.INIT_COMMAND),
    map(value => ({
        type: Types.LAST_COMMAND,
        payload: value.payload,
    }))
)