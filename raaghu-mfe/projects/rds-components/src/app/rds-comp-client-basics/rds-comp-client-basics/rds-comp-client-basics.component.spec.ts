import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics.component';


describe('RdsCompClientBasicsComponent', () => {
  let component: RdsCompClientBasicsComponent;
  let fixture: ComponentFixture<RdsCompClientBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompClientBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompClientBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
