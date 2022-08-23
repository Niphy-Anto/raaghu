import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-website-metric',
  templateUrl: './rds-website-metric.component.html',
  styleUrls: ['./rds-website-metric.component.scss']
})
export class RdsWebsiteMetricComponent implements OnInit {
  @Input() item: any;
  @Input() colorVariant:string='warning';
  constructor() { }

  ngOnInit(): void {
  }

  applyStyle():any{
    
  }

}
