import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminafterloginComponent } from './adminafterlogin.component';

describe('AdminafterloginComponent', () => {
  let component: AdminafterloginComponent;
  let fixture: ComponentFixture<AdminafterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminafterloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
