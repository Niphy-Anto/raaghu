import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import * as bootstrap from 'bootstrap';
declare var bootstrap : any;

@Component({
  selector: 'rds-toasts',
  templateUrl: './rds-toasts.component.html',
  styleUrls: ['./rds-toasts.component.scss']
})
export class RdsToastsComponent implements OnInit, AfterViewInit, OnChanges {

  // messages: any[] = [];
  // subscription!: Subscription;

  @Input()
  message = 'Hello, world! This is a toast message.';

  @Input() data_type: string = '';
  delay: number | undefined = undefined;
  @Input() autoHide: boolean = false;
  @Input() toastId: string = 'toastId';
  @Input() colorVariant: string = 'success';
  @Input() iconName: string = 'check';
  @Input() iconHeight: string = '16px'
  @Input() iconWidth: string = '18px'
  @Input() iconColorVariant: string = '';
  @Input() show: boolean = false;
  @Input() iconFill: boolean = false;
  @Input() iconStroke: boolean = true;


  @Input()
  withHeader = false

  @Input()
  toastMessageColorVariant?: string;

  @Input()
  headerTitle = '#000000'

  @Input()
  time = '11 seconds  ago'

  @Input()
  position: 'Top-Left' | 'Top-Center' | 'Top-Right' | 'Middle-Left' | 'Middle-Center' | 'Middle-Right' | 'Bottom-Left' | 'Bottom-Center' | 'Bottom-Right' = 'Top-Left';

  clicked = false;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
      }

    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
      }

    }
  }



  public get positionClass(): any[] {
    var positionClasses = ['']
    if (this.position === "Top-Left") {
      positionClasses.push('start-0')
    }
    else if (this.position === "Top-Center") {
      positionClasses.push('top-0 start-50 translate-middle-x')
    }
    else if (this.position === "Top-Right") {
      positionClasses.push('top-0 end-0')
    }
    else if (this.position === "Middle-Left") {
      positionClasses.push('top-50 start-0 translate-middle-y')
    }
    else if (this.position === "Middle-Center") {
      positionClasses.push('top-50 start-50 translate-middle')
    }
    else if (this.position === "Middle-Right") {
      positionClasses.push('top-50 end-0 translate-middle-y')
    }
    else if (this.position === "Bottom-Left") {
      positionClasses.push('bottom-0 start-0')
    }
    else if (this.position === "Bottom-Center") {
      positionClasses.push('bottom-0 start-50 translate-middle-x')
    }
    else if (this.position === "Bottom-Right") {
      positionClasses.push('bottom-0 end-0')
    }

    return positionClasses;
  }

  public get classes(): any[] {
    var colorClasses = ['toast-body bg-' + `${this.toastMessageColorVariant}`];
    return colorClasses;
  }

  public get buttonClasses(): any[] {
    var colorClasses = ['btn btn-' + `${this.colorVariant}`];
    return colorClasses;
  }





}
