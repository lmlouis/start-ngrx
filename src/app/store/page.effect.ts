import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../api.service';
import * as PageAction from './page.action';

@Injectable()
export class PageEffects {

  getAllActions$ = createEffect(() =>
    this.mysactions$.pipe( // Assurez-vous que actions$ est défini
      ofType(PageAction.getAllAction),
      mergeMap(() =>
        this.apiService.getAll().pipe(
          map((data) => PageAction.getAllActionSuccess({ data })),
          catchError((error) => of(PageAction.getAllActionFailure({ error: error.error })))
        )
      )
    )
  );

  constructor(private  mysactions$: Actions, private apiService: ApiService) {} // Injecter actions$ ici
}
