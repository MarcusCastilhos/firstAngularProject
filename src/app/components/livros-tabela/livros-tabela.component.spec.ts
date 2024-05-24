import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosTabelaComponent } from './livros-tabela.component';

describe('LivrosTabelaComponent', () => {
  let component: LivrosTabelaComponent;
  let fixture: ComponentFixture<LivrosTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivrosTabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivrosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
