import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkBodyComponent } from './framework-body.component';

describe('FrameworkBodyComponent', () => {
  let component: FrameworkBodyComponent;
  let fixture: ComponentFixture<FrameworkBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
