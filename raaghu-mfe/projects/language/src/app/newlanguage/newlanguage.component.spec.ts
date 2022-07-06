import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlanguageComponent } from './newlanguage.component';

describe('NewlanguageComponent', () => {
  let component: NewlanguageComponent;
  let fixture: ComponentFixture<NewlanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
