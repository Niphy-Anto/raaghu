import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsProgressbarComponent } from './rds-progressbar.component';

describe('RdsProgressbarComponent', () => {
  let component: RdsProgressbarComponent;
  let fixture: ComponentFixture<RdsProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
