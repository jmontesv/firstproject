import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestobservablesComponent } from './testobservables.component';

describe('TestobservablesComponent', () => {
  let component: TestobservablesComponent;
  let fixture: ComponentFixture<TestobservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestobservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
