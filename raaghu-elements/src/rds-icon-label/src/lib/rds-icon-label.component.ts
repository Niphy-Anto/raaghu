import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-icon-label',
  templateUrl: './rds-icon-label.component.html',
  styleUrls: ['rds-icon-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsIconLabelComponent implements OnInit {

  constructor() { }
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconposition: 'left' | 'right' = 'left';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() fill: boolean = false;
  @Input() stroke: boolean = true;
  @Input() colorVariant: 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' | undefined = undefined;
  @Input() size: 'small' | 'large' | 'medium' = 'medium';
  ngOnInit(): void {
  }
  public get Classes(): string[] {
    var classes: any = [];
    // if (this.iconposition === 'left') {
    //   classes.push('');
    // }
    // else if (this.iconposition === 'right') {
    //   classes.push(' flex-row-reverse  align-items-baseline justify-content-start')
    // }


    var selectSize = ` form-select-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg' : 'md'}`
    if (this.size === 'small') {
      this.height = '13px';
      this.width = '13px';
    }
    if (this.size === 'medium') {
      this.height = '14px';
      this.width = '14px';
    }
    if (this.size === 'large') {
      this.height = '16px';
      this.width = '16px';
    }
    classes.push(selectSize);

    return classes;
  }

  // public get iconClass(): string {
  //   var selectSize = `${this.iconSize === 'small' ? 'sm ' : this.iconSize === 'large' ? 'lg' : 'md'}`;
  //   return selectSize;
  // }

}
