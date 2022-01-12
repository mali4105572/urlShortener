
import { Action, createReducer, on } from '@ngrx/store';
import { ShortnerState } from './shortner-state';
import { ShortnerActions } from './shortner-actions';


const reducer = createReducer(
    new ShortnerState(),
    on(ShortnerActions.GetLongUrlSuccessAction, (state, { shortner }) => ({ ...state, shortner })),
    on(ShortnerActions.AddUrlSuccessAction, (state, { shortUrl }) => ({ ...state, shortUrl })),
    )

export function ShortnerReducer(state: ShortnerState | undefined, action: Action) {
    return reducer(state, action);
}



