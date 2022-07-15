import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-range',
  templateUrl: './rds-range.component.html',
  styleUrls: ['./rds-range.component.scss']
})
export class RdsRangeComponent implements OnInit {
@Input() value: number = 0;

  @Input() min = 0

  @Input() max = 100

  @Output() rangeValueOne = new EventEmitter()


  rangeval!: HTMLInputElement
  range1!: HTMLSpanElement
  sliderOne!: HTMLInputElement
  sliderTrack!: HTMLDivElement

  minGap = 0

  valueDisabled1!: boolean; 
  rangeZIndex1!: number;    
  rangeZIndex2!: number;     

  constructor() { }

  ngOnInit(): void {
    this.value;
    this.sliderTrack = document.querySelector('.slider-track') as HTMLDivElement
    this.sliderOne = document.getElementById('slider1') as HTMLInputElement
    this.fillColor();


  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  rangeone() {
    this.value = parseInt(this.sliderOne.value)
    this.rangeValueOne.emit(this.value)
    this.fillColor();
  }
  
  fillColor() {
    this.range1 = document.getElementById("range1") as HTMLSpanElement
    let percent1 = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.sliderTrack.style.background = `linear-gradient(90deg,#5C82E3 ${percent1}%,#D0D7DD 0%)`;
     this.range1.style.left = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`
  }

}