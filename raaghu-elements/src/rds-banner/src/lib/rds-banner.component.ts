import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-banner',
  templateUrl: './rds-banner.component.html',
  styleUrls: ['./rds-banner.component.scss']
})
export class RdsBannerComponent implements OnInit {
 
  @Input() alignCenter!: boolean;
  @Input() bannerText!: string;
  @Input() sticky!: boolean;
  @Input() position: 'top' | 'bottom' = 'top';
  @Input() colorVariant = 'light';

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    let classes: string[] = [];
    if (this.alignCenter === true)
      classes.push('justify-content-center');
      if(this.sticky === true){
        const mode2 = `${this.position === 'top' ? 'fixed-top' : ' fixed-bottom bottom-0'}`;
        classes.push(mode2);
        classes.push(' m-auto');

      }else{
         classes.push('');
      }

    const bgColor='bg-'+`${this.colorVariant}`;
    classes.push(bgColor);
    if(`${this.colorVariant}`!=='light' && `${this.colorVariant}`!=='warning' && `${this.colorVariant}`!=='info'){
      classes.push('text-white');
    }
    
    return classes
  }

}
