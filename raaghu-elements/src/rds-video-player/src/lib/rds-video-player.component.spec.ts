import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsVideoPlayerComponent } from './rds-video-player.component';

describe('RdsVideoPlayerComponent', () => {
  let component: RdsVideoPlayerComponent;
  let fixture: ComponentFixture<RdsVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsVideoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
