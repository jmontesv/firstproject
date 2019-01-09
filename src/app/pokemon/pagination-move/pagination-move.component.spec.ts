import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMoveComponent } from './pagination-move.component';

describe('PaginationMoveComponent', () => {
  let component: PaginationMoveComponent;
  let fixture: ComponentFixture<PaginationMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
