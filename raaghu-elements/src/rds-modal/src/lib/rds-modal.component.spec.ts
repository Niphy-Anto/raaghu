import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsModalComponent } from './rds-modal.component';

describe('RdsModalComponent', () => {
  let component: RdsModalComponent;
  let fixture: ComponentFixture<RdsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
