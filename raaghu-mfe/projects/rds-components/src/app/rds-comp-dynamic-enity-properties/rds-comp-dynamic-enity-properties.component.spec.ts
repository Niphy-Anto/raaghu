import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompDynamicEnityPropertiesComponent } from './rds-comp-dynamic-enity-properties.component';

describe('RdsCompDynamicEnityPropertiesComponent', () => {
  let component: RdsCompDynamicEnityPropertiesComponent;
  let fixture: ComponentFixture<RdsCompDynamicEnityPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompDynamicEnityPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompDynamicEnityPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
