import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _isOpen: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor() { }

  get openMenu() {
    return this._isOpen.asObservable();
  }

  setOpenMenu(value: boolean) {
    this._isOpen.next(value);
  }
}
