import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdsAccordionService {

  constructor() { }

  private subject = new Subject<any>();



  sendItems(bordervalue: boolean) {

    this.subject.next(bordervalue);

  }



  getItem(): Observable<any> {

    return this.subject.asObservable();

  }
}
