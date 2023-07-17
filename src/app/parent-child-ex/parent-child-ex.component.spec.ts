import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildExComponent } from './parent-child-ex.component';

describe('ParentChildExComponent', () => {
  let component: ParentChildExComponent;
  let fixture: ComponentFixture<ParentChildExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentChildExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
