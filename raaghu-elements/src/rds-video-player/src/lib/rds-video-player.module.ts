import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgCoreModule,VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';
import { RdsVideoPlayerComponent } from './rds-video-player.component';

@NgModule({
  declarations: [
    RdsVideoPlayerComponent
  ],
  imports: [
    BrowserModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule
  ],
  exports: [
    RdsVideoPlayerComponent
  ]
})
export class RdsVideoPlayerModule { }
