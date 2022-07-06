import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompWebsiteLogComponent } from './rds-comp-website-log.component';

describe('RdsCompWebsiteLogComponent', () => {
  let component: RdsCompWebsiteLogComponent;
  let fixture: ComponentFixture<RdsCompWebsiteLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompWebsiteLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompWebsiteLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
