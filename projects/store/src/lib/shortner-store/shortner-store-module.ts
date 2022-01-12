import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { ShortnerEffects } from './shortner/shortner-effects';
import { ShortnerReducer } from './shortner/shortner-reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('shortner', ShortnerReducer),

    EffectsModule.forFeature([ShortnerEffects]),

  ],
  exports: [StoreModule, EffectsModule]
})
export class ShortnerStoreModule { }

