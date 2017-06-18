import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialvComponent } from './tutorialv.component';

describe('TutorialvComponent', () => {
  let component: TutorialvComponent;
  let fixture: ComponentFixture<TutorialvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
