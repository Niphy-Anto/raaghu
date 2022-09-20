import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-badge',
  templateUrl: './rds-badge.component.html',
  styleUrls: ['./rds-badge.component.scss']
})
export class RdsBadgeComponent implements OnInit {

  title = 'rds-badge';
  @Input() size: 'small' | 'medium' | 'large' = 'small'
  @Input() label: string = 'New';
  @Input() positioned: boolean = false
  @Input() badgeType: 'rectangle' | 'circle' | 'pill' = 'rectangle'
  @Input() colorVariant: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | 'secondary' = 'primary';


  constructor() { }

  ngOnInit(): void {
  }


  public get classList(): string[] {
    var clsList: string[] = ['badge']
    const bgColor = 'text-bg-' + `${this.colorVariant}`;
    clsList.push(bgColor);

    if (this.positioned === true) {
      clsList.push('position-absolute start-100 top-0 translate-middle')
    }
    if (this.badgeType==='circle') {
      clsList.push('rounded-circle')
    }
    if (this.badgeType==='pill') {
      clsList.push('rounded-pill')
    }

    return clsList
  }

}
