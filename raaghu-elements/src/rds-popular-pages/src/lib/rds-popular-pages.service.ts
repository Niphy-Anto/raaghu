import { Injectable } from '@angular/core';

export interface popularPageItems {
  title: string;
  subtitle: string;
  icon: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class RdsPopularPagesService {

  constructor() { }
}
