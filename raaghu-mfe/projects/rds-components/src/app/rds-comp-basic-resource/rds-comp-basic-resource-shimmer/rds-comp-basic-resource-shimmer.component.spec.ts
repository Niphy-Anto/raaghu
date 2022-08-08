import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompBasicResourceShimmerComponent } from './rds-comp-basic-resource-shimmer.component';

describe('RdsCompBasicResourceShimmerComponent', () => {
  let component: RdsCompBasicResourceShimmerComponent;
  let fixture: ComponentFixture<RdsCompBasicResourceShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompBasicResourceShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompBasicResourceShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
