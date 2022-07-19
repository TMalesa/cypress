import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreatorComponent } from './employee-creator.component';

describe('EmployeeCreatorComponent', () => {
  let component: EmployeeCreatorComponent;
  let fixture: ComponentFixture<EmployeeCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
