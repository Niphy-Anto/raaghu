import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { RdsAccordionService } from '../rds-accordion.service';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionItemComponent implements OnInit,OnChanges {

  // static accordionItemCount = 0;
  // @Input() id = AccordionItemComponent.accordionItemCount;
  // @Input() count = AccordionItemComponent.accordionItemCount;
  // @Input() title!: string;
  // @Input() alwaysOpen = false;
  // @Input() expanded = false;
  // @Output() onClose = new EventEmitter<any>();
  // @Output() onShow = new EventEmitter<any>();
  // @Input() content!: TemplateRef<any>;
  // @Input() accordionId!: string;

  // constructor() {
  //   AccordionItemComponent.accordionItemCount++;
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  // // tslint:disable-next-line:typedef
  // public toggleExpanded() {
  //   this.expanded = !this.expanded;
  //   if (this.expanded) {
  //     this.onShow.emit({ id: this.id });
  //   }
  //   else {
  //     this.onClose.emit({ id: this.id });

  //   }
  // }
  // // tslint:disable-next-line:typedef
  // public isTemplate(value: any) {
  //   return value instanceof TemplateRef;
  // }

  // // public get expand(): string[] {
  // //   let val = ['']
  // //   if (this.expanded === true) {
  // //     val.push('accordion-collapse')
  // //     val.push('show')
  // //   }
  // //   return val
  // // }

  // public get openParent(): string {
  //   const val = `${this.alwaysOpen ? '#' : '#' + this.accordionId}`
  //   return val
  // }
  static accordionItemCount = 0;
    subscription!: Subscription;
  @Input() id = AccordionItemComponent.accordionItemCount;
  @Input() count = AccordionItemComponent.accordionItemCount;
  @Input() title!: string;
  @Input() alwaysOpen = false;
  @Input() expanded = false;

  @Output() onClose = new EventEmitter<any>();
  @Output() onShow = new EventEmitter<any>();
  @Input() accordionIcon : boolean = false;
  @Input() accordionId: string = 'myAccordion';
  border:boolean=false
  constructor(private rdsservice: RdsAccordionService ) {
    AccordionItemComponent.accordionItemCount++;
  }

  ngOnChanges(changes: SimpleChanges): void {
  
  }

  ngOnInit(): void {
    this.subscription=this.rdsservice.getItem().subscribe(item=>{
      if(item){
        this.border=true
        this.accordionIcon = true
      }else{
        this.border=false
        this.accordionIcon = false
      }
    })

  }

}
