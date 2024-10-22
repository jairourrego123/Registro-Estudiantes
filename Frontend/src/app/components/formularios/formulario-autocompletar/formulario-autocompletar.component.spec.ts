import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAutocompletarComponent } from './formulario-autocompletar.component';

describe('FormularioAutocompletarComponent', () => {
  let component: FormularioAutocompletarComponent;
  let fixture: ComponentFixture<FormularioAutocompletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAutocompletarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioAutocompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
