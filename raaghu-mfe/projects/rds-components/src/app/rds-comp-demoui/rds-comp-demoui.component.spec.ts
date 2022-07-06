import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompDemouiComponent } from './rds-comp-demoui.component';

describe('RdsCompDemouiComponent', () => {
  let component: RdsCompDemouiComponent;
  let fixture: ComponentFixture<RdsCompDemouiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompDemouiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompDemouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
