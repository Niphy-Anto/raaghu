import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompApiScopeResourcesComponent } from './rds-comp-api-scope-resources-shimmer.component';

describe('RdsCompApiScopeResourcesComponent', () => {
  let component: RdsCompApiScopeResourcesComponent;
  let fixture: ComponentFixture<RdsCompApiScopeResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompApiScopeResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompApiScopeResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
