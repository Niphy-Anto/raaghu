import { Injector } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SharedService } from './shared.service';

export abstract class MfeBaseComponent {
  private sharedService: SharedService;
  constructor(injector: Injector) {
    this.sharedService = injector.get(SharedService);
  }

  emitEvent(eventName: string, data?: any) {
    this.sharedService.subjects[eventName]?.next(data);
  }

  on(eventName: string): Observable<any> {
    if (!this.sharedService.subjects[eventName]) {
      this.sharedService.subjects[eventName] = new Subject();
    }
    return this.sharedService.subjects[eventName].asObservable();
  }

  setValue(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getValue(key: any): any {
    return localStorage.getItem(key);
  }
}
