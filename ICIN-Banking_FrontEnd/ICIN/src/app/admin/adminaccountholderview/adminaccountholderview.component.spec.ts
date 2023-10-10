import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountholderviewComponent } from './adminaccountholderview.component';

describe('AdminaccountholderviewComponent', () => {
  let component: AdminaccountholderviewComponent;
  let fixture: ComponentFixture<AdminaccountholderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaccountholderviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaccountholderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
