import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { Icons } from './icons';
import { Flags } from './flag-icons';

@Component({
  selector: 'rds-icon',
  templateUrl: './rds-icon.component.html',
  styleUrls: ['./rds-icon.component.scss'],
})
export class RdsIconComponent implements OnInit, OnChanges {
  private svgIcon!: SVGElement;
  title = 'rds-icon';
  @Input() height: string = '';
  @Input() fill: boolean | undefined  = false;
  @Input() stroke: boolean | undefined = true;
  @Input() width: string = '';
  @Input() name: string = '';
  @Input() colorVariant: string = '';
    
  constructor(private element: ElementRef,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    if (this.name) {
      let svgData: string = Icons[this.name];
      if (!svgData || svgData === '') {
        svgData = Flags[this.name]
      }
      if (svgData) {
        if (this.svgIcon) {
          this.element.nativeElement.removeChild(this.svgIcon);
        }
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
      }
    }
  }

  ngOnChanges(): void {
    if (this.name) {
      const svgData: string = Icons[this.name];
      if (svgData) {
        if (this.svgIcon) {
          this.element.nativeElement.removeChild(this.svgIcon);
        }
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
      }
    }
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    const svg = div.querySelector('svg');
    if (this.height) {
      svg.style.height = this.height;
    }
    if (this.width) {
      svg.style.width = this.width;
    }
    if (this.colorVariant == 'primary') {
      // svg.setAttribute('class', 'icon-' + this.colorVariant);
      svg.style.backgroundColor = '#7E2EEf';
    } else  if (this.colorVariant == 'secondary') {
      svg.style.backgroundColor = '#2B0066';
    } else  if (this.colorVariant == 'success') {
      svg.style.backgroundColor = '#2EEF59';
    } else  if (this.colorVariant == 'info') {
      svg.style.backgroundColor = '#3ef1e8';
    } else  if (this.colorVariant == 'warning') {
      svg.style.backgroundColor = '#E3A300';
    } else  if (this.colorVariant == 'danger') {
      svg.style.backgroundColor = '#EF2E2E';
    } else  if (this.colorVariant == 'dark') {
      svg.style.backgroundColor = '#363636';
    } else  if (this.colorVariant == 'light') {
      svg.style.backgroundColor = '#F8F9FA';
    } else  if (this.colorVariant == 'review') {
      svg.style.backgroundColor = '#E3A300';
    }

    if (this.fill) {
      svg.style.fill = 'currentColor';
    }

    if (this.stroke || this.stroke === undefined) {
      svg.style.stroke = 'currentColor';
    } else {
      svg.style.stroke = 'none';
    }
    // if (this.color) {
    //   const paths = svg.querySelectorAll('[stroke]');
    //   for (let i = 0; i < paths.length; i++) {
    //     paths[i].style.stroke = this.color;
    //   }
    // }

    return svg || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }


}