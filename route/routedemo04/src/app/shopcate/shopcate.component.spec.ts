import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcateComponent } from './shopcate.component';

describe('ShopcateComponent', () => {
  let component: ShopcateComponent;
  let fixture: ComponentFixture<ShopcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
