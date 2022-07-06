import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-card',
  templateUrl: './rds-card.component.html',
  styleUrls: ['./rds-card.component.scss']
})
export class RdsCardComponent implements OnInit {

  @Input() width?: string = "100%";
  @Input() height?: string = "100%";
  @Input() custClass: boolean = true;
  @Input() borderCard!: boolean;
  @Input() Recommended!:boolean;
  @Input()
  header!: TemplateRef<any>
  @Input()
  footer!: TemplateRef<any>
  @Input()
  body!: TemplateRef<any>
  @Input() cardWidth?: number;
  @Input() colorVariant?: string='light';
  @Input()
  Data: any = {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public get cardClasses(): string[] {
    let custClasses = ['card ']
    const bgColor = `${this.colorVariant}`;
    if (bgColor === 'Standard' && this.borderCard === true) {
      custClasses.push(' subscription-border-blue');
    } else if (bgColor === 'Premium' && this.borderCard === true) {
      custClasses.push(' subscription-border-purple');
    } else if (bgColor === 'Basic' && this.borderCard === true) {
      custClasses.push(' subscription-border-green');
    } else if (bgColor === 'Professional' && this.borderCard === true) {
      custClasses.push(' subscription-border-orangered');
    } else if (this.borderCard === false) {
      custClasses.push(' border-0');
    }
    else{
      custClasses.push('');
    }
    return custClasses
  }
  public get cardBody(): string[] {
    let custClass = ['p-0', 'body-border']
    if (this.custClass === true) {
      custClass = ['']
    }
    return custClass
  }
  public get title(): string[] {
    let custClasses = ['card-title']

    return custClasses
  }

  
  public get classes(): string[] {
    let classes: string[] = [];
    const bgColor = `${this.colorVariant}`;
    classes.push(bgColor);
    
    return classes;
  }


}
