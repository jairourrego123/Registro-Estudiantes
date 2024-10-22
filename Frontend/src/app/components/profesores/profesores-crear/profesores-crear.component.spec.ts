import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresCrearComponent } from './profesores-crear.component';

describe('ProfesoresCrearComponent', () => {
  let component: ProfesoresCrearComponent;
  let fixture: ComponentFixture<ProfesoresCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesoresCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
