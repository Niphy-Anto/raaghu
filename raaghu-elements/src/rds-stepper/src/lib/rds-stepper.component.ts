import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'rds-stepper',
  templateUrl: './rds-stepper.component.html',
  styleUrls: ['./rds-stepper.component.scss']
})
export class RdsStepperComponent implements OnInit, AfterViewInit {
  
  @Input() activepage!: number;
  @Output() tabNumber = new EventEmitter<any>();
  totalSteps: number = 3;
 
  @Input() stepparList:any=[
    {stepname: "step1",steptabname:"Profile", tablink: '#nav-home',ariacontrols: 'nav-home'},
        {stepname: "step2",steptabname:"Positions", tablink: '#nav-profile',ariacontrols: 'nav-profile'},
        {stepname: "step3",steptabname:"Setting", tablink: '#nav-contact',ariacontrols: 'nav-contact'}
 ];

 @Input() stepparDetailedList:any=[
  {stepname: "step1",steptabname:"Profile", tablink: '#nav-home', ariacontrols: 'nav-home', description: 'Vitae sed mi luctus laoreet.'},
  {stepname: "step2",steptabname:"Positions", tablink: '#nav-profile', ariacontrols: 'nav-profile', description: 'Cursus semper viverra.'},
  {stepname: "step3",steptabname:"Setting", tablink: '#nav-contact', ariacontrols: 'nav-contact', description: 'Penatibus eu quis ante.'},
  {stepname: "step4",steptabname:"disable", tablink: '#nav-deabled', ariacontrols: 'nav-deabled', description:  'seursus semper viverra.'}
    ];

  @Input() stepperType: 'simple' | 'panel' | 'bullets' | 'panel-simple' | 'panel-arrow' | 'panel-border' | 'multi-circles-1' | 'multi-circles-2' 
  | 'bullet-text' | 'multi-circles-3' | 'progress-bar'='simple' ;


  constructor( @Inject(DOCUMENT) private document: Document) {
  }


  ngAfterViewInit(): void {
    let type = `${this.stepperType}`;
    type = type == 'panel-border'? 'panel': type;
    type = type == 'panel-border'? 'panel': type;
    type = type == 'multi-circles-1'? 'multi-circle': type;
    type = type == 'multi-circles-2'? 'multi-circle': type;
    type = type == 'multi-circles-3'? 'multi-circle': type;
    type = type == 'progress-bar'? 'bar': type;
    type = type == 'bullets'? 'bullet': type;

    let liElements = this.document.querySelectorAll('li');
    let filterLiElement: HTMLLIElement[] = [];
    liElements.forEach(item=>{
      if(item.parentElement?.parentElement?.id == 'rds-stepper'){
        filterLiElement.push(item)
      }
    })

    let first = 0;
    filterLiElement.forEach(item1=>{
      if(first == 0){
        item1.classList.add(`${type}-active`);  
        first = 1;        
      }
      else{
        item1.classList.add(`${type}-incomplete`);
      }
    })

    filterLiElement.forEach(item=>{
      item.addEventListener('click', function handleClick(event){
        let complete = 0;
        filterLiElement.forEach(item1=>{
          if(complete){
            item1.classList.remove(`${type}-incomplete`)
            item1.classList.remove(`${type}-complete`)
            item1.classList.remove(`${type}-active`)            
            item1.classList.add(`${type}-incomplete`)
          }
          else if(item1 == item){
            item1.classList.remove(`${type}-incomplete`)
            item1.classList.remove(`${type}-complete`)
            item1.classList.remove(`${type}-active`)
            item1.classList.add(`${type}-active`)
            complete = 1;
          }
          else{
            item1.classList.remove(`${type}-incomplete`)
            item1.classList.remove(`${type}-complete`)
            item1.classList.remove(`${type}-active`)
            item1.classList.add(`${type}-complete`)
          }
        })
      })
    })
  }

  ngOnInit(): void {
    this.activepage = 1;
    this.totalSteps = this.stepparList.length;
  }
}
