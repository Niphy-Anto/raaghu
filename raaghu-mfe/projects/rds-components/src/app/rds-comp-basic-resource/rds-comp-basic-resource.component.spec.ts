import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource.component';

describe('RdsCompBasicResourceComponent', () => {
  let component: RdsCompBasicResourceComponent;
  let fixture: ComponentFixture<RdsCompBasicResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBasicResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBasicResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
