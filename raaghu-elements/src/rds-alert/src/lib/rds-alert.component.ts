import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'rds-alert',
  templateUrl: './rds-alert.component.html',
  styleUrls: ['./rds-alert.component.scss']
})
export class RdsAlertComponent implements OnInit {

  title = 'rds-alert';

  // visibility true or false
  @Input() visibility = false;

  @Input()
  alertOpen = true


  @Input() size: 'small' | 'medium' | 'large' = 'medium'
  // @Input()
  // showicon =false
  // @Input()
  // showheading =true
  @Input()
  dismisable = true

  // added icon in Alert Box

  @Input() icon?: string;

  @Input() align?: string;

  @Input() label = 'A simple primary alert—check it out!';
  @Input() heading = '';
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() position: 'top' | 'bottom' = 'top';
  @Output() onDismiss = new EventEmitter<Event>();
  @Input() showAlertonLoad: boolean = false;
  @Input() delay: number = 0;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow = new EventEmitter<Event>(this.visibility = true);

  @ViewChild('alertElement', { static: true })
  alertEl!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    if (this.showAlertonLoad) {
      this.show();
    }
  }


  public get classes(): string {
    const mode = `alert alert-${this.colorVariant} alert-dismissible fade show`;
    const mode2 = `${this.position === 'top' ? ' position-fixed top-0 start-0 m-3' : ' position-fixed bottom-0 start-0 m-3'}`;
    // const mode3 = `${this.align}  `;
    return mode + mode2;
  }

  public get iconSize(): string {
    const mode2 = `${this.size === 'medium' ? 'fs-4' : this.size === 'large' ? 'fs-3' : this.size === 'small'}`;
    return mode2;
  }

  public get alertSize(): string{
    const mode3 =  `${this.size === 'small' ? 'alert-sm' : this.size === 'large' ? 'alert-lg' : 'alert-md'}`;
    switch (this.size) {
      case 'small':
        this.iconHeight = '15px';
        this.iconWidth = '15px';
        break;
      case 'medium':
        this.iconHeight = '20px';
        this.iconWidth = '20px';
        break;
      case 'large':
        this.iconHeight = '25px';
        this.iconWidth = '25px';
        break;  
      default:
        this.iconHeight = '20px';
        this.iconWidth = '20px';
        break;
    }
    return mode3;

  }


  public get withDismiss(): string {
    let dismiss = 'd-none'
    if (this.dismisable === true) {
      dismiss = ''
    }



    return dismiss;

  }

  showAlert() {
    this.alertOpen = true
  }

  show() {
    const alert1 = new bootstrap.Alert(
      this.alertEl.nativeElement,
    );
    if (this.colorVariant !== 'danger') {
      setTimeout(() => {
        this.closeAlert();
      }, this.delay);
    }

  }


  closeAlert() {
    var element = document.getElementById('alert');
    var alert = new bootstrap.Alert(element);
    alert.dispose();
    this.alertOpen = false;
    this.onDismiss.emit();
  }

  // tslint:disable-next-line:typedef
  close() {
    this.visibility = true;
  }

}
