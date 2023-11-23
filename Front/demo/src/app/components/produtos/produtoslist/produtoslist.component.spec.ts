import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoslistComponent } from './produtoslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { throwError,of } from 'rxjs';


describe('ProdutoslistComponent', () => {
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoslistComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2 - Verifica se a lista de produtos é carregada corretamente
it('TESTE 2 - Verifica se a lista de produtos é carregada corretamente', () => {
  spyOn(component.produtosService, 'listAll').and.returnValue(of([new Produto(), new Produto()]));
  component.listAll();
  expect(component.lista.length).toBeGreaterThan(0);
});

// CASO DE TESTE 3 - Verifica se o método exemploErro trata erros corretamente
it('TESTE 3 - Verifica se o método exemploErro trata erros corretamente', () => {
  spyOn(window, 'alert');
  spyOn(component.produtosService, 'exemploErro').and.returnValue(throwError('Erro simulado'));
  component.exemploErro();
  expect(window.alert).toHaveBeenCalledWith('Exemplo de tratamento de erro/exception! Observe o erro no console!');
});

// CASO DE TESTE 4 - Verifica se o método adicionar abre a modal corretamente
it('TESTE 4 - Verifica se o método adicionar abre a modal corretamente', () => {
  const modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
  component.adicionar('modal1');
  expect(modalServiceSpy.open).toHaveBeenCalled();
});

// CASO DE TESTE 5 - Verifica se o método editar abre a modal corretamente
it('TESTE 5 - Verifica se o método editar abre a modal corretamente', () => {
  const modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
  const produto = new Produto();
  component.editar('modal1', produto, 0);
  expect(modalServiceSpy.open).toHaveBeenCalled();
});
});
