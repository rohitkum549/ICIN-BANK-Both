import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestchequebookComponent } from './requestchequebook.component';

describe('RequestchequebookComponent', () => {
  let component: RequestchequebookComponent;
  let fixture: ComponentFixture<RequestchequebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestchequebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestchequebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
