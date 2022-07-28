/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RdsCompProductListComponent } from './rds-comp-product-list.component';

describe('RdsCompProductListComponent', () => {
  let component: RdsCompProductListComponent;
  let fixture: ComponentFixture<RdsCompProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsCompProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
