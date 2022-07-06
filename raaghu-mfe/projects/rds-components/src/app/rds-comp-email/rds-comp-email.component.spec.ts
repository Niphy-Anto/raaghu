import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEmailComponent } from './rds-comp-email.component';

describe('RdsCompEmailComponent', () => {
  let component: RdsCompEmailComponent;
  let fixture: ComponentFixture<RdsCompEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
