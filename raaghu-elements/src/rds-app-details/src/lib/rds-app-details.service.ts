
import { Injectable } from '@angular/core';

export interface appDetailsItems {
  icon: string;
  title: string;
  subtitle: string;
  route: string;
};

@Injectable({
  providedIn: 'root'
})
export class RdsAppDetailsService {

  constructor() { }
}
