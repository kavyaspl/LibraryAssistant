import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainUserComponent } from './maintain-user.component';

describe('MaintainUserComponent', () => {
  let component: MaintainUserComponent;
  let fixture: ComponentFixture<MaintainUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
