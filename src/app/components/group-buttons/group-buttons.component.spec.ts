import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupButtonsComponent } from './group-buttons.component';

describe('GroupButtonsComponent', () => {
  let component: GroupButtonsComponent;
  let fixture: ComponentFixture<GroupButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupButtonsComponent]
    });
    fixture = TestBed.createComponent(GroupButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
