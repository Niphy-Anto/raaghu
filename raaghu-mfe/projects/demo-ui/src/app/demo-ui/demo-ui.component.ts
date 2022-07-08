import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-demo-ui',
  templateUrl: './demo-ui.component.html',
  styleUrls: ['./demo-ui.component.scss']
})
export class DemoUiComponent implements OnInit {
  rdsDemouiMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompDemoui',
  };
  constructor() { }

  ngOnInit(): void {
   
  }
}
