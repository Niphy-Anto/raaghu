import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-double-range',
  templateUrl: './rds-double-range.component.html',
  styleUrls: ['./rds-double-range.component.scss']
})
export class RdsDoubleRangeComponent implements OnInit {

  val1: number = 0;
  val2: number = 0;

  @Input() min = 5000

  @Input() max = 10000

  @Output() rangeValueOne = new EventEmitter()

  @Output() rangeValueTwo = new EventEmitter()

  rangeval!: HTMLInputElement
  range1!: HTMLSpanElement
  range2!: HTMLSpanElement
  sliderOne!: HTMLInputElement
  sliderTwo!: HTMLInputElement
  sliderTrack!: HTMLDivElement

  minGap = 0

  constructor() { }

  ngOnInit(): void {
    this.val1 = this.min;
    this.val2 = this.min;
    this.sliderTrack = document.querySelector('.slider-track') as HTMLDivElement
    this.sliderOne = document.getElementById('slider1') as HTMLInputElement
    this.sliderTwo = document.getElementById('slider2') as HTMLInputElement
  }

  writeValue(obj: any): void {
    this.val1 = obj;
    this.val2 = obj;
  }

  rangeone() {
    this.val1 = parseInt(this.sliderOne.value)
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.val1 = parseInt(this.sliderTwo.value) - this.minGap;
    }
    this.rangeValueOne.emit(this.val1)
    this.fillColor();
  }
  rangetwo() {
    this.val2 = parseInt(this.sliderTwo.value)
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.val2 = parseInt(this.sliderOne.value) + this.minGap;
    }
    this.rangeValueTwo.emit(this.val2)
    this.fillColor();
  }

  fillColor() {
    this.range1 = document.getElementById("range1") as HTMLSpanElement
    this.range2 = document.getElementById("range2") as HTMLSpanElement
    let percent1 = ((this.val1 - this.min) / (this.max - this.min)) * 100;
    let percent2 = ((this.val2 - this.min) / (this.max - this.min)) * 100;
    this.sliderTrack.style.background = `linear-gradient(90deg, #D0D7DD ${percent1}% , #5C82E3 ${percent1}% , #5C82E3 ${percent2}%, #D0D7DD ${percent2}%)`;
    this.range1.style.left = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`
    this.range2.style.left = `calc(${percent2}% + (${-5 - percent2 * 0.15}px))`
  }

}
