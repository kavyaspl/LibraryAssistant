import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainBookComponent } from './maintain-book.component';

describe('MaintainBookComponent', () => {
  let component: MaintainBookComponent;
  let fixture: ComponentFixture<MaintainBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
