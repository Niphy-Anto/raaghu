import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'rds-size',
  templateUrl: './rds-size.component.html',
  styleUrls: ['./rds-size.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsSizeComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  
  @Input() sizeData = [{value: 'XL'},{value:'L'},{value:'M'},{value:'S'},{value:'XS'},{value:'L'},{value:'M'},{value:'S'},{value:'XS'}];
  @Input() sizeDataWithDescription = [{value: '15', description:"impoity input and ngonint"},{value: '15', description:"impoity input and ngonint"}, {value:'14',description:" with the passanger"}];
  @Input() sizeType : 'withoutDescription'|'withDescription' = 'withDescription';
  @Output() onselect : EventEmitter<any>= new EventEmitter<any>();
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let liElements = this.document.querySelectorAll('li');
    let filterLiElement: HTMLLIElement[] = [];
    liElements.forEach(item=>{
      if(item.parentElement?.id == 'rds-size'){
        filterLiElement.push(item);
      }
    })


    filterLiElement.forEach(item=>{
      item.addEventListener('click', function handleClick(event){
        filterLiElement.forEach(item1=>{
          if(item1 == item){
            item1.classList.remove('border');
            item1.classList.add('border-color');
          }
          else{
            item1.classList.remove('border-color');
            item1.classList.add('border');
          }
        })
      })
    })
  }
  onclick(data:any){
    this.onselect.emit(data);
  }
}
