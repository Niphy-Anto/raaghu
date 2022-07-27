import { Component, Input, OnInit } from '@angular/core';
import { popularPageItems } from './rds-popular-pages.service';

@Component({
  selector: 'rds-popular-pages',
  templateUrl: './rds-popular-pages.component.html',
  styleUrls: ['./rds-popular-pages.component.scss']
})
export class RdsPopularPagesComponent implements OnInit {

  @Input()
  customPopularPageItems: popularPageItems[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
