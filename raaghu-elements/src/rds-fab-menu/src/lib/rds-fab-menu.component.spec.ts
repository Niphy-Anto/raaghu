import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsFabMenuComponent } from './rds-fab-menu.component';

describe('RdsFabMenuComponent', () => {
  let component: RdsFabMenuComponent;
  let fixture: ComponentFixture<RdsFabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsFabMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsFabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
