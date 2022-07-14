import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdTempComponent } from './abcd-temp.component';

describe('AbcdTempComponent', () => {
  let component: AbcdTempComponent;
  let fixture: ComponentFixture<AbcdTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcdTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcdTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
