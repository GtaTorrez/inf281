import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasMedidasComponent } from './graficas-medidas.component';

describe('GraficasMedidasComponent', () => {
  let component: GraficasMedidasComponent;
  let fixture: ComponentFixture<GraficasMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
