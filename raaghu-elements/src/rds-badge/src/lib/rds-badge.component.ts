import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-badge',
  templateUrl: './rds-badge.component.html',
  styleUrls: ['./rds-badge.component.scss']
})
export class RdsBadgeComponent implements OnInit {

  title = 'rds-badge';
  @Input()
  size = 'mid'
  @Input()
  label = 'New';
  @Input()
  pillBadges = false;
  @Input()
  positioned = false
  @Input()
  iconBadge = false;
  @Output()
  onClick = new EventEmitter<Event>();
  @Output() onClose = new EventEmitter<Event>();

  @Input() colorVariant?: string='primary';
  @Input() close:boolean = false;

  @Input() top!: string;
  @Input() start!: string;
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClosed(event:any){
    this.onClose.emit(event);
  }

  public get classList(): string[] {
    var clsList: string[] = [`${this.size}`,'badge']
    const bgColor = 'badge-' + `${this.colorVariant}`;
    clsList.push(bgColor);
   
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'primary') {
      clsList.push('text-dark');
    }

    if (this.positioned === true) {
      clsList.push('position-absolute smallest start-100 top-0 translate-middle')
    }

    if (this.iconBadge === true) {
      clsList.push('rounded-circle')
    }
    return clsList
  }

}
