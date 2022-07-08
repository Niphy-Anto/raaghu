import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsSelectListComponent } from './rds-select-list.component';

describe('RdsSelectListComponent', () => {
  let component: RdsSelectListComponent;
  let fixture: ComponentFixture<RdsSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
