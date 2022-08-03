import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSizeComponent } from './rds-size.component';

describe('RdsSizeComponent', () => {
  let component: RdsSizeComponent;
  let fixture: ComponentFixture<RdsSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
