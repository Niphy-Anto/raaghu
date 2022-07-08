import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RdsBreadcrumbService, BreadcrumbsItems } from './rds-breadcrumb.service';

@Component({
  selector: 'rds-breadcrumb',
  templateUrl: './rds-breadcrumb.component.html',
  styleUrls: ['./rds-breadcrumb.component.scss']
})
export class RdsBreadcrumbComponent implements OnInit {

  title = 'rds-breadcrumb';
  subscription!: Subscription;
  breadcrumbsitems: BreadcrumbsItems[] = [];

  @Input()
   customBreadcrumbsItems: BreadcrumbsItems[] = [{ name: 'Home', route: '/home', iconClass: 'bi bi-house-door' }, { name: 'About', route: '/About', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }, { name: 'Services', route: '/Services', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }];

 
  @Input() role: 'basic' | 'Advanced' | 'withDivider' = 'basic';
  @Input() iconShow: boolean = false;

  @Input()
  disabled = false;

  @Input()
  iconClass?: string;

  @Output() onNavigation = new EventEmitter<Event>();

  activepage?: number;

  onClick(item: any, i: number): void {
    this.activepage = i;
    this.onItemClick.emit(item);
  }

  @Output()
  onItemClick = new EventEmitter<any>();

  constructor(private breadcrumbsService: RdsBreadcrumbService) { }

  ngOnInit(): void {
    this.subscription = this.breadcrumbsService.getItem().subscribe(items => {
      if (items) {
        this.breadcrumbsitems = this.customBreadcrumbsItems
      } else {
        this.breadcrumbsitems = [];
      }
    });
    this.breadcrumbsService.sendItems(this.customBreadcrumbsItems);
  }

}
