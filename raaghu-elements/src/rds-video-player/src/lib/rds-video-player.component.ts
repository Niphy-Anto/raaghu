import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:'rds-video-player',
  templateUrl: './rds-video-player.component.html',
  styleUrls: ['./rds-video-player.component.scss'],
})
export class RdsVideoPlayerComponent implements OnInit {
  @Input() videoLink?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
