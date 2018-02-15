import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMaintComponent } from './country-maint.component';

describe('CountryMaintComponent', () => {
  let component: CountryMaintComponent;
  let fixture: ComponentFixture<CountryMaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
