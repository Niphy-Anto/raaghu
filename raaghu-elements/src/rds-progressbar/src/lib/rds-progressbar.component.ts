import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-progressbar',
  templateUrl: './rds-progressbar.component.html',
  styleUrls: ['./rds-progressbar.component.scss']
})
export class RdsProgressbarComponent implements OnInit {

  @Input() animation?: boolean;
  @Input() height?: string;
  @Input() colorVariant?: string;
  @Input() striped?: string;
  @Input() progressWidth?: number;
  @Input() progressbar_MaxWidth?: string;
  @Input() label?: boolean;
  @Input() role?: 'single' | 'multiple' = 'single';
  @Input() progressvalues = [{ progressWidth: "50%", background: 'bg-success', stripe: 'progress-bar-striped', animation: 'progress-bar-animated' }, { progressWidth: "20%", background: 'bg-danger' }, { progressWidth: "30%", background: 'bg-info' }];
  progressWidthString: string;

  constructor() { }

  ngOnInit(): void {
    this.progressWidthString = `${this.progressWidth}`;
  }

  // lable value
  public get lableValue(): any {
    var label = this.label ? `${this.progressWidth}` : ''
    return label
  }

  //classes for progress bar
  public get classes(): any[] {

    // var customClasses =  ['progress-bar', `${this.progressIndicatorColor}` , `${this.striped}`,`${this.customIndicatorColor}`];
    var customClasses = ['progress-bar bg-'+`${this.colorVariant}`, `${this.striped}`]
    var animate = this.animation ? 'progress-bar-striped progress-bar-animated' : ''
    customClasses.push(animate)

    //if (this.customColor !== '') {

    //  var index = customClasses.indexOf(`${this.colorVariant}`)
    //  customClasses.splice(index, 1)
    //}
    return customClasses
  }
}
