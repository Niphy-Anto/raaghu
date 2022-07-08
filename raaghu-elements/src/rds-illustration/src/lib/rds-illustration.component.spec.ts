import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsIllustrationComponent } from './rds-illustration.component';

describe('RdsIllustrationComponent', () => {
  let component: RdsIllustrationComponent;
  let fixture: ComponentFixture<RdsIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
