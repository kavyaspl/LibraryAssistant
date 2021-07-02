import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMainComponent } from './lib-main.component';

describe('LibMainComponent', () => {
  let component: LibMainComponent;
  let fixture: ComponentFixture<LibMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
