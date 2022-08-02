
export interface appDetailsItems {
  icon: string;
  title: string;
  subtitle: string;
  route: string;
}import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdsAppDetailsService {

  constructor() { }
}
