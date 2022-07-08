import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsFileUploaderComponent } from './rds-file-uploader.component';

describe('RdsFileUploaderComponent', () => {
  let component: RdsFileUploaderComponent;
  let fixture: ComponentFixture<RdsFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
