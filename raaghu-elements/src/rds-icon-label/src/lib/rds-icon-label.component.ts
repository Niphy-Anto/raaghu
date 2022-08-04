import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-icon-label',
  templateUrl: './rds-icon-label.component.html',
  styleUrls: ['rds-icon-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsIconLabelComponent implements OnInit {

  constructor() { }
  @Input() label?: string;
  @Input() icon = '';
  @Input() iconposition: 'left' | 'right' = 'left';
  @Input() iconSize: 'small' | 'large' = "small";

  @Input() size: 'small' | 'large' | 'medium' = 'medium';
  ngOnInit(): void {
  }
  public get Classes(): string[] {
    var classes = ['d-flex '];
    if (this.iconposition === 'left') {
      classes.push('');
    }
    else if (this.iconposition === 'right') {
      classes.push(' flex-row-reverse  align-items-baseline justify-content-start')
    }


    var selectSize = ` form-select-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg' : 'md'}`
    classes.push(selectSize);

    return classes;
  }

  // public get iconClass(): string {
  //   var selectSize = `${this.iconSize === 'small' ? 'sm ' : this.iconSize === 'large' ? 'lg' : 'md'}`;
  //   return selectSize;
  // }

}
