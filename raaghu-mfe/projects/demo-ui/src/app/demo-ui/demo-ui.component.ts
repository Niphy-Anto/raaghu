import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { transition, trigger, query, style, animate, } from '@angular/animations';

@Component({
  selector: 'app-demo-ui',
  templateUrl: './demo-ui.component.html',
  styleUrls: ['./demo-ui.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('1s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class DemoUiComponent implements OnInit {
  isAnimation: boolean = true;

  rdsDemouiMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompDemoui',
  };
  constructor() { }

  ngOnInit(): void {
    this.isAnimation = true;
   
  }
}
