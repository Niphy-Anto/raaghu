import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { Icons } from './icons';
import { Flags } from './flag-icons';

@Component({
  selector: 'rds-icon',
  templateUrl: './rds-icon.component.html',
  styleUrls: ['./rds-icon.component.scss'],
  // styles: [':host::ng-deep svg{width: px; height: 50px}'],
})
export class RdsIconComponent implements OnInit, OnChanges {
  private svgIcon: SVGElement | undefined;
  title = 'rds-icon';
  @Input() height: string = '';
  @Input() fill: boolean | undefined = false;
  @Input() stroke: boolean | undefined = true;

  @Input() width: string = '';
  // @Input() color: string = '';
  @Input() type: string = '';
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
    if (this.colorVariant) {
      svg.setAttribute('class', 'icon-' + this.colorVariant);
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