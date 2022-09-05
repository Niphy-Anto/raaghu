import { Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsMysettingsComponent } from './rds-comp-mysettings.component';

describe('RdsMysettingsComponent', () => {
  let component: RdsMysettingsComponent;
  let fixture: ComponentFixture<RdsMysettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsMysettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsMysettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
