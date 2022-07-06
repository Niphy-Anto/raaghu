import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompNewDynamicEntityPropertyComponent } from './rds-comp-new-dynamic-entity-property.component';

describe('RdsCompNewDynamicEntityPropertyComponent', () => {
  let component: RdsCompNewDynamicEntityPropertyComponent;
  let fixture: ComponentFixture<RdsCompNewDynamicEntityPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompNewDynamicEntityPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompNewDynamicEntityPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
