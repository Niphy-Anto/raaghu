import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-accordian',
  templateUrl: './rds-accordian.component.html',
  styleUrls: ['./rds-accordian.component.scss']
})
export class RdsAccordionComponent implements OnInit {

  // @Input() flush = false;
  // @Input() expand = false;
  // @Input() Size!: string;
  // title: any;
  // @Input() alwaysOpen!: boolean;

  // constructor() { }

  // ngOnInit(): void {
  // }
  // public get classes(): string {
  //   const mode = this.flush ? 'accordion accordion-flush' : 'accordion';

  //   return mode;
  // }
  @Input() id: string = 'myAccordion';
  @Input() flush = false;
  @Input() expand = false;
  @Input() outline = false;
  title: any;
  @Input() alwaysOpen!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): string {
    const mode = this.flush ? 'accordion accordion-flush' : 'accordion';
    const outline = this.outline ? ' accordion outline' : ' accordion';
    return mode + outline;
  }

}
