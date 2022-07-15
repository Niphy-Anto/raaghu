import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-offcanvas',
  templateUrl: './rds-offcanvas.component.html',
  styleUrls: ['./rds-offcanvas.component.scss']
})
export class RdsOffcanvasComponent implements OnInit {


  @Input() buttonTitle = 'Button'
  @Input() placement?: 'start' | 'end' | 'top' | 'bottom' = 'start';

  @Input() offId = 'canvasExample';
  @Input() canvasTitle: string = '';
  @Input()  offcanvaswidth=250;
 
  @Input() bodySpacing: boolean=true;
  @Input() colorVariant : 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'light';
  @Output() onShow = new EventEmitter<Event>();
  @Output() onClose = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    let align = ` offcanvas offcanvas-${this.placement} `;
    let classes: string[] = [];
    // let bgColor = 'bg-'+`${this.colorVariant}`;
    //  `${this.colorVariant === 'dark' ? 'bg-dark' : 'bg-light'}`

//   if (`${this.colorVariant}`!==undefined && `${this.colorVariant}`!=="" && `${this.colorVariant}`!=="undefined"){
//     align = align + ' offcanvas-bg-color ';
// }
let bgColor ='bg-'+`${this.colorVariant}`;
if ( `${this.colorVariant}`!=="light"){
  bgColor = bgColor + ' text-white ';
  }
     return align + bgColor;

  }

  public get bodyClasses(): string {
    let spacing = `${this.bodySpacing===false ? ' p-0' : ''}`;
    return spacing;
  }
}
