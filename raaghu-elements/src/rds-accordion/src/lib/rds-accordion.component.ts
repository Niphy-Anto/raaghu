import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RdsAccordionService } from './rds-accordion.service';

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
  @Input() expanded!: boolean;
  @Input() border: boolean=false;
  @Output() accordianClass = new EventEmitter<any>();
  @Output() accordionIcon = new EventEmitter<any>();
  constructor(private rdsaccordionService:RdsAccordionService) { }

  ngOnInit(): void {
  }
  public get classes(): string {
    const mode = this.flush ? 'accordion accordion-flush' : 'accordion';
 
    const outline = this.outline ? ' accordion outline' : ' accordion';
    if(!this.flush && !this.outline && this.border)
{
  //const borderTop = this.border ? ' border-top border-bottom' : 'accordion';
  this.rdsaccordionService.sendItems(true)
  return 'accordion accordion-flush' ; 
}else{
  this.rdsaccordionService.sendItems(false)
  return mode + outline ; 
} 
  }

}
