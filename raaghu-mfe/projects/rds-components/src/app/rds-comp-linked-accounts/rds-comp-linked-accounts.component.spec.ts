import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts.component';

describe('RdsLinkedAccountsComponent', () => {
  let component: RdsLinkedAccountsComponent;
  let fixture: ComponentFixture<RdsLinkedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsLinkedAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsLinkedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
