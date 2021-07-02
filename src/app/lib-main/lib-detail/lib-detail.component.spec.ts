import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDetailComponent } from './lib-detail.component';

describe('LibDetailComponent', () => {
  let component: LibDetailComponent;
  let fixture: ComponentFixture<LibDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
