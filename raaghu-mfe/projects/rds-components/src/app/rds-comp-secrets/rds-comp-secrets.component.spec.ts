import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSecretsComponent } from './rds-comp-secrets.component';

describe('RdsCompSecretsComponent', () => {
  let component: RdsCompSecretsComponent;
  let fixture: ComponentFixture<RdsCompSecretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSecretsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSecretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
