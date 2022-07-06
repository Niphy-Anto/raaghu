import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCardComponent } from './rds-card.component';

describe('RdsCardComponent', () => {
  let component: RdsCardComponent;
  let fixture: ComponentFixture<RdsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
