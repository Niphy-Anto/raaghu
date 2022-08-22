import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import de from 'date-fns/locale/de/index';
// import { Tooltip } from 'bootstrap'
declare var bootstrap: any;
@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss']
})
export class RdsButtonComponent implements AfterViewInit, DoCheck, OnInit {

  @Input()
  colorVariant?: string;

  @Input()
  submit = false;

  static count: number = 0;
  // @Input()
  // backgroundColor?: string;

  // @Input()
  // borderColor?: string;

  // @Input()
  // color?: string;

  @Input() block?: boolean;

  @Input()
  size?: string;

  @Input()
  disabled = false;

  @Input()
  outlineButton = false;

  @Input()
  roundedButton = false;

  @Input() iconHeight: string = '';
  @Input() iconWidth: string = '';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;

  // @Input()
  // toggleButton = false;

  @Input()
  buttonType?: 'iconOnly' | 'labelOnly' | 'iconLabel' = 'iconLabel';

  @Input()
  icon: string = '';

  @Input()
  label: string = '';

  @Output()
  onClick = new EventEmitter<Event>();

  @Input() tooltipTitle: string = '';
  @Input() tooltipPlacement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
  @Input() id: string = 'buttonId';
  @Input() isLoading: boolean = false;
  @Input() showLoadingSpinner: boolean = false;
  makeSpinnerActive: boolean;

  constructor() {
    this.id = this.id + RdsButtonComponent.count++;
    
  }
  ngOnInit(): void {
    this.makeSpinnerActive = this.showLoadingSpinner;
  }
  
  ngDoCheck(): void {
    if(!this.showLoadingSpinner){
      this.isLoading = false;
      if(this.makeSpinnerActive){
        this.showLoadingSpinner = true;
      }
    }
    else{
      if(this.makeSpinnerActive && this.showLoadingSpinner){
        this.isLoading = true;
      }
    }
  }


  ngAfterViewInit(): void {
    if (this.tooltipPlacement && this.tooltipTitle) {
      const tooltipElement: any = document.getElementById(this.id)
      // update
      if (tooltipElement) {
        let bsTooltip = new bootstrap.Tooltip(tooltipElement)
        tooltipElement.title = this.tooltipTitle
        bsTooltip = new bootstrap.Tooltip(tooltipElement)
      }
    }
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.colorVariant : 'btn btn-' + this.colorVariant}`;
    const mode = ` btn-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
    const icon = `${this.roundedButton ? ' btn-icon rounded-pill' : ''}`;

    return outline + mode + icon;
  }

  public get blockWidth(): string[] {
    let classes: string[] = [];
    if (this.block === true) {
      classes.push('w-100')
      return classes
    }
    return classes;
    // return this.block ? 'd-grid' : '';
  }

  public get submitButton(): string {
    return this.submit ? 'submit' : 'button';
  }

  ngOnDestroy(): void {

    RdsButtonComponent.count = 0;
  }

  buttonClick(evt: any) {
    debugger
    if (this.makeSpinnerActive) {
      this.isLoading = true;
    }
    this.onClick.emit(evt);
  }

}
  