import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-nav-tab',
  templateUrl: './rds-nav-tab.component.html',
  styleUrls: ['./rds-nav-tab.component.scss']
})
export class RdsNavTabComponent implements OnInit {

  @Input() navtabsItems?: any
  @Input() horizontalAlignment: 'start' | 'center' | 'end' = 'start';
  @Input() verticalAlignment?: boolean;
  @Input() pills?: boolean;
  @Input() tabs?: boolean;
  @Input() fill?: boolean;
  @Input() justified?: boolean;
  @Input() flex?: boolean;
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Output()
  onClicktab = new EventEmitter<{ evnt: any }>();
  @Input() activepage: number = 0;
  @Input() tabsWithBorderTop?: boolean = true;
  constructor() { }

  ngOnInit(): void {
    // this.activepage = 0;
  }

  onClick(i: any): void {
    this.activepage = i;
    this.onClicktab.emit(i)
  }

  public get classes(): string {
    const align = ` justify-content-${this.horizontalAlignment}`;
    const vertical = `${this.verticalAlignment ? ' flex-column vertical-tab' : ' flex '}`;
    const pill = `${this.pills ? 'nav nav-pills' : ''}`;
    const tab = `${this.tabs ? ' rds-tab-2' : ''}`;
    const fill = `${this.fill ? ' nav-pills nav-fill' : ''}`;
    const justify = `${this.justified ? ' nav-pills nav-justified' : ''}`;
    const flex = `${this.flex ? 'nav-pills flex-column flex-sm-row' : ''}`
    const border = `${this.tabsWithBorderTop ? '' : ' rds-tab-2'}`;
    return align + vertical + pill + tab + border + fill + justify + flex;
  }


  public get flexClass(): string[] {
    var flecClass = ['col-md-12'];
    if (this.verticalAlignment === true) {
      flecClass.push('d-flex');
    }
    return flecClass
  }


}
