import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { PageEffects } from './store/page.effect';
import { FeatureReducerKey, PageReducer } from './store/page.reducer';
import { featureKey } from './store/page.selectors';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              provideStore({[featureKey]: PageReducer}),
              provideEffects(PageEffects),
              provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
              provideState({name: FeatureReducerKey, reducer: PageReducer}),
            ]
};
