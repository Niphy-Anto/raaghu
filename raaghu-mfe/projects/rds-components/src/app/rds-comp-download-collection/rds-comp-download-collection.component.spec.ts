import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompDownloadCollectionComponent } from './rds-comp-download-collection.component';

describe('RdsCompDownloadCollectionComponent', () => {
  let component: RdsCompDownloadCollectionComponent;
  let fixture: ComponentFixture<RdsCompDownloadCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompDownloadCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompDownloadCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
