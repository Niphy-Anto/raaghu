import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPropertiesComponent } from './rds-comp-properties.component';

describe('RdsCompPropertiesComponent', () => {
  let component: RdsCompPropertiesComponent;
  let fixture: ComponentFixture<RdsCompPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
