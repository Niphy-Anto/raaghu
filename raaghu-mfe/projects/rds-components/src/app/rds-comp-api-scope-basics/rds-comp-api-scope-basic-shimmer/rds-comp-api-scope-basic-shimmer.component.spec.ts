import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompApiScopeBasicShimmerComponent } from './rds-comp-api-scope-basic-shimmer.component';

describe('RdsCompApiScopeBasicShimmerComponent', () => {
  let component: RdsCompApiScopeBasicShimmerComponent;
  let fixture: ComponentFixture<RdsCompApiScopeBasicShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompApiScopeBasicShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompApiScopeBasicShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
