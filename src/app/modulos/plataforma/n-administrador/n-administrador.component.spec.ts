import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAdministradorComponent } from './n-administrador.component';

describe('NAdministradorComponent', () => {
  let component: NAdministradorComponent;
  let fixture: ComponentFixture<NAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
