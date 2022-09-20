import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'rds-alert',
  templateUrl: './rds-alert.component.html',
  styleUrls: ['./rds-alert.component.scss']
})
export class RdsAlertComponent implements OnInit {


  // @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() dismissible: boolean = true
  @Input() icon: string = '';
  @Input() label = 'A simple primary alert—check it out!';
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() delay: number = 0;
  @Output() onDismiss = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
    this.hide();
  }


  public get classes(): string {
    const mode = `alert alert-${this.colorVariant}`;
    let mode1: string = '';
    if (this.dismissible) {
      mode1 = ' alert-dismissible'
    }
    const mode2 = `${this.position === 'top' ? ' position-fixed top-0 start-0 m-3' : ' position-fixed bottom-0 start-0 m-3'}`;
    return mode + mode2 + mode1;
  }


  hide(): void {
    if (this.delay) {
      setTimeout(() => {
        this.closeAlert();
      }, this.delay);
    }
  }


  closeAlert() {
    var element = document.getElementById('alert');
    var alert = new bootstrap.Alert(element);
    alert.close();
    this.onDismiss.emit();
  }


}
