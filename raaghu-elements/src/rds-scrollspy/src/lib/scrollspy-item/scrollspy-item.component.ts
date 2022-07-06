import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scrollspy-item',
  templateUrl: './scrollspy-item.component.html',
  styleUrls: ['./scrollspy-item.component.scss'],
})

export class ScrollspyItemComponent implements OnInit {

  @Input() scrollItemId? = 'scrollspyHeading1';
  @Input() header?: string;

  constructor() { }

  ngOnInit() {
  }

}
