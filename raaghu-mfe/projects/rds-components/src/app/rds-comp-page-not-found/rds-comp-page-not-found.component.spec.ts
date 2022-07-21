import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found.component';

describe('RdsCompPageNotFoundComponent', () => {
  let component: RdsCompPageNotFoundComponent;
  let fixture: ComponentFixture<RdsCompPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
