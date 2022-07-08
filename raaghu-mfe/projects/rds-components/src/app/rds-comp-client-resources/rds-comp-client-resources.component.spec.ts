import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';


describe('RdsCompClientResourcesComponent', () => {
  let component: RdsCompClientResourcesComponent;
  let fixture: ComponentFixture<RdsCompClientResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClientResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClientResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
