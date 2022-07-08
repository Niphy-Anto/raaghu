import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsWidgetComponent } from './rds-widget.component';

describe('RdsWidgetComponent', () => {
  let component: RdsWidgetComponent;
  let fixture: ComponentFixture<RdsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
