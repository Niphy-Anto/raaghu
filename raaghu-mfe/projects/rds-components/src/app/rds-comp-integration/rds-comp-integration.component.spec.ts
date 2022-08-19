import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompIntegrationComponent } from './rds-comp-integration.component';

describe('RdsCompIntegrationComponent', () => {
  let component: RdsCompIntegrationComponent;
  let fixture: ComponentFixture<RdsCompIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
