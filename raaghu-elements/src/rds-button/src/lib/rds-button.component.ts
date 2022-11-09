import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tooltip } from 'bootstrap'
@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss']
})
export class RdsButtonComponent implements AfterViewInit, OnInit {

  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default' | 'review' | '' = 'default';
  @Input() submit = false;
  static count: number = 0;
  @Input() block: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' | undefined = 'small';
  @Input() disabled = false;
  @Input() outlineButton = false;
  @Input() roundedButton = false;
  @Input() roundedCorner = false;
  @Input() tooltipTitle: string;
  @Input() tooltipPlacement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
  @Input() id: string = 'buttonId';
  @Input() isLoading: boolean = false;
  @Input() showLoadingSpinner: boolean = false;
  @Input() iconHeight: string = '';
  @Input() iconWidth: string = '';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<Event>();

  constructor() {
    this.id = this.id + RdsButtonComponent.count++;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    if (this.tooltipTitle && tooltipTriggerList) {
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl)) || '';
    }
    
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? ' btn btn-outline-' + this.colorVariant : ' btn btn-' + this.colorVariant}`;
    const mode = this.size ? ` btn-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg ' : 'md '}` : '';
    const icon = `${this.roundedButton ? ' btn-icon rounded-pill ' : ''}`;
    const icon1 = `${this.roundedCorner ? ' rounded-pill ' : ''}`;
    const disabledGrey = `${this.disabled === true ? 'btn ' : ''}`
    return outline + mode + icon + icon1 + disabledGrey;
  }

  public get blockWidth(): string[] {
    let classes: string[] = [];
    if (this.block === true) {
      classes.push('w-100')
      return classes
    }

    return classes;
  }

  public get submitButton(): string {
    return this.submit ? 'submit' : 'button';
  }

  ngOnDestroy(): void {
    RdsButtonComponent.count = 0;
  }

  buttonClick(evt: any) {
    if(!this.showLoadingSpinner&&!this.disabled){
      this.onClick.emit(evt);
    }
  }

}
