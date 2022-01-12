import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { Shortner } from 'types';
import { ShortnerState } from './shortner-state';

const shortnerFeatureSelector: MemoizedSelector<object, ShortnerState> =
    createFeatureSelector<ShortnerState>('shortner');
  
export const getLongUrlSelector: MemoizedSelector<object, Shortner> =
    createSelector(shortnerFeatureSelector, ({ shortner }) => shortner);

export const addUrlSelector: MemoizedSelector<object, string> =
    createSelector(shortnerFeatureSelector, ({ shortUrl }) => shortUrl);

