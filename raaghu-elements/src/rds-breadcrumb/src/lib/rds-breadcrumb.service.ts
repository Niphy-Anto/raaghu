import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface BreadcrumbsItems {
  name: string;
  route: string;
  iconClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class RdsBreadcrumbService {

  constructor() { }

  private subject = new Subject<any>();

  sendItems(breadcrumbs: BreadcrumbsItems[]) {
    this.subject.next(breadcrumbs);
  }

  getItem(): Observable<any> {
    return this.subject.asObservable();
  }

}
