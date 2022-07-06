import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-range',
  templateUrl: './rds-range.component.html',
  styleUrls: ['./rds-range.component.scss']
})
export class RdsRangeComponent implements OnInit {

  onChange!: (value: string) => void;
  onTouched!: () => void;

  @Input() customstyle: "style1" | "style2" | "style3" = "style1"
  @Input() max = 1000;
  @Input() min = 500;
  vale?: number;
  // @Input() step = "0.5";
  @Input() disabled: boolean = false;
  rangeval!: HTMLInputElement

  @Output() currentValue = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    this.rangeval = document.getElementById('myRange') as HTMLInputElement
    this.vale = this.min
  }

  css() {
    this.vale = parseInt(this.rangeval.value)
    let tooltip = document.getElementById('tooltip') as HTMLSpanElement
    let length = this.max - this.min
    let progress = ((parseInt(this.rangeval.value) - this.min) / length) * 100
    // this.rangeval.style.backgroundImage = `linear-gradient(90deg,#5C82E3 ${progress}%,#D0D7DD 0%)`
    progress = progress - 0.95
    tooltip.style.left = `calc(${progress}% + (${-6 - progress * 0.15}px))`
    this.currentValue.emit(this.vale)
  }

  public get slider(): string {
    let applyClass = 'slider_1'
    this.customstyle === "style1" ? applyClass = 'slider_1' : ''
    this.customstyle === "style2" ? applyClass = 'slider_2' : ''
    this.customstyle === "style3" ? applyClass = 'slider_3' : ''
    return applyClass
  }

}
