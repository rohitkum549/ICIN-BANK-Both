import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationhistoryComponent } from './transationhistory.component';

describe('TransationhistoryComponent', () => {
  let component: TransationhistoryComponent;
  let fixture: ComponentFixture<TransationhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransationhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
