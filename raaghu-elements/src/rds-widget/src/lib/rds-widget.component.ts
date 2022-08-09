import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-widget',
  templateUrl: './rds-widget.component.html',
  styleUrls: ['./rds-widget.component.scss']
})
export class RdsWidgetComponent implements OnInit {

  @Input() headerTitle: string = 'Widget'
  @Input() isRefreshRequired: boolean = true;
  @Input() colorVariant = '';
  @Output() onRefresh = new EventEmitter<Event>();
  //@Input() cardheight = 'card-stretch';

  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): string[] {
    let classes: string[] = [];

    const bgColor = 'bg-' + `${this.colorVariant}`;
    classes.push(bgColor);
    if (`${this.colorVariant}` !== 'light' && `${this.colorVariant}` !== 'warning' && `${this.colorVariant}` !== 'info' && `${this.colorVariant}` !== 'white' && `${this.colorVariant}` !== '') {
      classes.push('text-white bg-gradient-primary');
    }
    //var heightclass=`${this.cardheight}`;
    //classes.push(heightclass);
    return classes
  }
  //public get heightclasses(): any[] {
  //  var heightclass = [`${this.cardheight}`];
  //  return heightclass;
  //}
}
