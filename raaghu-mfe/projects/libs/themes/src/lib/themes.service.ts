import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  public static default = 'default';

  public get current(): string {
  	return localStorage.getItem('theme') ?? ThemesService.default;
  }

  public set current(value: string) {
  	localStorage.setItem('theme', value);
    this.style.href = `./styles/${value}.scss`;
  }

  private readonly style: HTMLLinkElement;

  constructor() { 
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);

    if (localStorage.getItem('theme') !== undefined) {
    	this.style.href = `./styles/${this.current}.scss`;
    }
  }
  set theme(name: any) {
    document.documentElement.setAttribute('theme', name);
  }
}
