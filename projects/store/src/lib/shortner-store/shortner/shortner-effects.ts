import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { switchMap,exhaustMap, catchError, map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { EnvironmentTOKEN } from 'core';
import { ShortnerHttpService } from 'api';
import { ShortnerActions } from './shortner-actions';

@Injectable()
export class ShortnerEffects {

    @Effect() getLongUrl$ = createEffect(() => this.actions$.pipe(
        ofType(ShortnerActions.GetLongUrlAction),
        switchMap((shortUrl) => this.shortnerHttp.getLongUrl$(shortUrl).pipe(
            map((shortner) => ShortnerActions.GetLongUrlSuccessAction( {shortner} )),
            catchError(error => of(ShortnerActions.GetLongUrlFailureAction({ error }))
            )),

        )
    ));

    @Effect() addUrl$ = createEffect(() => this.actions$.pipe(
        ofType(ShortnerActions.AddUrlAction),
        switchMap(({ longUrl }) => this.shortnerHttp.addUrl$( longUrl ).pipe(
            map((shortUrl) => ShortnerActions.AddUrlSuccessAction({ shortUrl })),
            catchError(error => of(ShortnerActions.AddUrlFailureAction({ error }))
            )),
        )
    ));

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private http: HttpClient,
        private shortnerHttp: ShortnerHttpService,
        @Inject(EnvironmentTOKEN) private env: any
    ) { }
}