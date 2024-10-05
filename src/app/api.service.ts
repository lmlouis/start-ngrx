import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IModel } from './imodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

    getAll() : Observable<IModel[]> {
      const listModels = [
        { id: 1, label: 'Model 1', description: 'Description 1', createdAt: new Date()},
        { id: 2, label: 'Model 2', description: 'Description 2', createdAt: new Date()},
        { id: 3, label: 'Model 3', description: 'Description 3', createdAt: new Date()},
      ];
      return of(listModels).pipe(delay(200));
    }
}
