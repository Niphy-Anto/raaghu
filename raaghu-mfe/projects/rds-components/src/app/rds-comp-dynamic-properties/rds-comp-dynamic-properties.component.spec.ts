import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompDynamicPropertiesComponent } from './rds-comp-dynamic-properties.component';

describe('RdsCompDynamicPropertiesComponent', () => {
  let component: RdsCompDynamicPropertiesComponent;
  let fixture: ComponentFixture<RdsCompDynamicPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompDynamicPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompDynamicPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
