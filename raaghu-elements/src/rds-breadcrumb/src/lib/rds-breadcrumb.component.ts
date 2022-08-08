import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
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
  customBreadcrumbsItems: BreadcrumbsItems[] = [{ name: 'Home', route: '/home', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true },
  { name: 'About', route: '/About', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: false },
  { name: 'Contact US', route: '/Contact', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true },
  ];


  @Input() role: 'basic' | 'Advanced' | 'withDivider' = 'basic';
  @Input() iconShow: boolean = false;
  iconStroke: boolean = true;
  iconFill: boolean = false;

  disabled = false;

  iconClass?: string;

  // @Input() iconHeight: string = '15px';
  // @Input() iconWidth: string = '15px';

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
        this.customBreadcrumbsItems = this.customBreadcrumbsItems
      } else {
        this.customBreadcrumbsItems = [];
      }
    });
    this.breadcrumbsService.sendItems(this.customBreadcrumbsItems);


  }

  public get classes(): string[] {
    var state = ['pe-2'];
    if (this.iconShow !== true) {
      state.push('d-none')
    }
    else {
      state.push('');
    }

    return state;
  }
  public get disbleclass(): any {
    var state2 = [' '];
    if (this.disabled === true) {
      state2.push('disabled');
    }
    else {
      state2.push(' ');
    }

    return state2;
  }

}

