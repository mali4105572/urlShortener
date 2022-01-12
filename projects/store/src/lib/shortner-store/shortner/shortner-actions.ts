import { Action, createAction, props } from '@ngrx/store';
import { Cart, PastDays, Shortner, TopSel, TopUniqueSel } from 'types';

export const ShortnerActions = {

    GetLongUrlAction: createAction('[shortner] Get LongUrl', props<{ shortUrl:string }>()),
    GetLongUrlSuccessAction: createAction('[shortner] Get LongUrl Success', props<{ shortner:Shortner }>()),
    GetLongUrlFailureAction: createAction('[shortner] Get LongUrl Failure', props<{ error: any }>()),

    AddUrlAction: createAction('[shortner] Add Url', props<{ longUrl: string }>()),
    AddUrlSuccessAction: createAction('[shortner] Add Url Success', props<{ shortUrl: string }>()),
    AddUrlFailureAction: createAction('[shortner] Add Url Failure', props<{ error: any }>()),

}
