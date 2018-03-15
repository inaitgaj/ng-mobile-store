import { Injectable } from '@angular/core';
import { Subject } from 'RxJs';

@Injectable()
export class NavServiceService {

  private navStateSource = new Subject<Object>();
  navState$ = this.navStateSource.asObservable();

  setNavBarState( state: Object ) {
    console.log('setting state as - %j', state);
    this.navStateSource.next( state );
  }

  constructor() {
    //set using cookie backend service.

   }



}
