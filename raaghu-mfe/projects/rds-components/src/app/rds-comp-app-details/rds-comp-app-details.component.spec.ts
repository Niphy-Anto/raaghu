import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAppDetailsComponent } from './rds-comp-app-details.component';

describe('RdsCompAppDetailsComponent', () => {
  let component: RdsCompAppDetailsComponent;
  let fixture: ComponentFixture<RdsCompAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAppDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
