import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCommunicationComponent } from './com-communication.component';

describe('ComCommunicationComponent', () => {
  let component: ComCommunicationComponent;
  let fixture: ComponentFixture<ComCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
