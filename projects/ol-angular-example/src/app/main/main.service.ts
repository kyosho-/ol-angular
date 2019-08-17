import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private navigationChangedSource = new Subject<boolean>();

  navigationChanged$ = this.navigationChangedSource.asObservable();

  constructor() { }

  changeNavigation(opened: boolean) {
    this.navigationChangedSource.next(opened);
  }
}
