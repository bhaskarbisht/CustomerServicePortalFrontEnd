import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedrequestComponent } from './closedrequest.component';

describe('ClosedrequestComponent', () => {
  let component: ClosedrequestComponent;
  let fixture: ComponentFixture<ClosedrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
