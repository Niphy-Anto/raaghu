import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-big-number-widget',
  templateUrl: './rds-big-number.component.html',
  styleUrls: ['./rds-big-number.component.scss']
})
export class RdsBigNumberWidgetComponent implements OnInit {

  title = 'rds-big-number';
  @Input() bigNumber: string = '$ 55,000';
  @Input() subText: string = '';
  @Input() icon: string = '';
  @Input() iconHeight: string = '12px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() iconWidth: string = '12px';
  @Input() iconColor: string = '';
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' = 'primary';
  @Input() textAlign: 'text-start' | 'text-center' | 'text-end' = 'text-center';
  @Input() subTitleColorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' = 'success';
  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): any[] {
    let customClasses: string[] = [];

    const bgColor = 'bg-' + `${this.colorVariant}`;
    customClasses.push(bgColor);
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'white' && `${this.colorVariant}` !== '') {
      customClasses.push('text-white bg-gradient-primary');
    }
    return customClasses
  }
  public get alignclasses(): any[] {
    var alignclass = [`${this.textAlign}`];
    return alignclass;
  }
  public get subTitleClasses(): any[] {
    var subTitleClass = ['text-' + `${this.subTitleColorVariant}`];
    return subTitleClass;
  }
}
