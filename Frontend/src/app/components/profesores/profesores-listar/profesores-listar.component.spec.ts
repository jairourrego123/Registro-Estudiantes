import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresListarComponent } from './profesores-listar.component';

describe('ProfesoresListarComponent', () => {
  let component: ProfesoresListarComponent;
  let fixture: ComponentFixture<ProfesoresListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesoresListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesoresListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
