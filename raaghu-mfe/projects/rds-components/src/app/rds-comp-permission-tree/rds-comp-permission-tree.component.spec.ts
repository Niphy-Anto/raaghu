import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPermissionTreeComponent } from './rds-comp-permission-tree.component';

describe('RdsCompPermissionTreeComponent', () => {
  let component: RdsCompPermissionTreeComponent;
  let fixture: ComponentFixture<RdsCompPermissionTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPermissionTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPermissionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
