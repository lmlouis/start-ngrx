import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IModel } from '../imodel';
import * as PageAction from '../store/page.action';
import { selectFeatureData, selectFeatureError, selectFeatureIsLoading } from '../store/page.selectors';
import { AppState } from '../store/type/app.state';
@Component({
  selector: 'app-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  store = inject(Store<AppState>)
  isLoading$: Observable<boolean>;
  data$: Observable<IModel[]>;
  error$: Observable<String | null>;
  constructor() {
    this.isLoading$ = this.store.select(selectFeatureIsLoading);
    this.data$ = this.store.select(selectFeatureData);
    this.error$ = this.store.select(selectFeatureError);
  }
  ngOnInit(): void {
    this.store.dispatch(PageAction.getAllAction())
  }
}
