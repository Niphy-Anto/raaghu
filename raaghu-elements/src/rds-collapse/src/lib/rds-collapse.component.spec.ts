import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCollapseComponent } from './rds-collapse.component';

describe('RdsCollapseComponent', () => {
  let component: RdsCollapseComponent;
  let fixture: ComponentFixture<RdsCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
