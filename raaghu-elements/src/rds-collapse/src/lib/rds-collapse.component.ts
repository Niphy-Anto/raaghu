import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-collapse',
  templateUrl: './rds-collapse.component.html',
  styleUrls: ['./rds-collapse.component.scss']
})
export class RdsCollapseComponent implements OnInit {

  title = "rds-collapse";

  @Input()
  collapseIdOne = 'collapseExampleSectionOne';

  @Input()
  collapseIdTwo = 'collapseExampleSectionTwo';

  @Input()
  buttonLabelOne = 'Toggle One';
  @Input()
  buttonLabelTwo = 'Toggle Two';
  @Input()
  multipleButtonLabel = 'Toggle Button';

  @Input()
  collapseIdMultiple = this.collapseIdOne + this.collapseIdTwo;

  @Input()
  Horizontal = false;

  @Input()
  multipleButton = false;

  // @Input()
  // multipleTargets = false;

  @Input()
  width = '300px';

  @Input()
  contentSectionOne = 'One';
  @Input()
  contentSectionTwo = 'Two';

  @Input() borderCard!: boolean;

  //@Input()
  //// tslint:disable-next-line:variable-name
  //button_backgroundColor?: string;

  //@Input()
  //// tslint:disable-next-line:variable-name
  //button_borderColor?: string;

  //@Input()
  //// tslint:disable-next-line:variable-name
  //button_Color?: string;

  expanded = false;

  @Input()
  colorVariant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'primary';


  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public get collapsebutton(): string {
    return 'me-3 btn btn-' + this.colorVariant;
  }

  // public get collapsewrapper(): string {
  //   const mode1 = this.Horizontal ? ' collapse-horizontal' : '';
  //   return 'collapse multi-collapse' + mode1;
  // }

  public get collapsewrapper(): string {
    const mode1 = this.multipleButton ? 'collapse multi-collapse' : '';
    return 'collapse ' + mode1;
  }

  // tslint:disable-next-line:typedef
  public toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.onShow.emit(event);
    }
    else {
      this.onClose.emit(event);
    }
  }

  public get cardClasses(): string[] {
    let custClasses = ['card card-body ']
    if (this.borderCard === false) {
      custClasses.push(' border-0');
    }
    else {
      custClasses.push('');
    }
    return custClasses
  }

}
