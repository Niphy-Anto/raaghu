import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsImageComponent } from './rds-image.component';

describe('RdsImageComponent', () => {
  let component: RdsImageComponent;
  let fixture: ComponentFixture<RdsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
