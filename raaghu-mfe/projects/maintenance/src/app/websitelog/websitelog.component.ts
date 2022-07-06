import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-websitelog',
  templateUrl: './websitelog.component.html',
  styleUrls: ['./websitelog.component.scss']
})
export class WebsitelogComponent implements OnInit, OnChanges {
  public rdswebsiteMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store) { }
  @Input() websiteLogData: any = []

  ngOnInit(): void {
    this.rdswebsiteMfeConfig = {
      name: 'RdsCompWebsiteLog',
      input: {
        websiteLogData: this.websiteLogData
      },
      output: {

      }
    };
  }
  ngOnChanges(): void {
    const mfeConfig = this.rdswebsiteMfeConfig
    mfeConfig.input.websiteLogData = [... this.websiteLogData];
    this.rdswebsiteMfeConfig = mfeConfig;
  }

}
