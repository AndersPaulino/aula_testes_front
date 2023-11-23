import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosdetailsComponent } from './produtosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let produto = new Produto();
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;
    component.produto = produto;
    fixture.detectChanges();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2 - Verifica se o formulário contém um campo de texto para o nome do produto
  it('TESTE 2 - Verifica se o formulário contém um campo de texto para o nome do produto', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('input[name="exampleInputText1"]');
    expect(inputElement).toBeTruthy();
  });

  // CASO DE TESTE 3 - Verifica se o formulário contém um campo de número para o valor do produto
  it('TESTE 3 - Verifica se o formulário contém um campo de número para o valor do produto', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('input[name="exampleInputPassword1"]');
    expect(inputElement).toBeTruthy();
  });

  // CASO DE TESTE 4 - Verifica se o botão de salvar está presente
  it('TESTE 4 - Verifica se o botão de salvar está presente', () => {
    const compiled = fixture.debugElement.nativeElement;
    const buttonElement = compiled.querySelector('button[type="submit"]');
    expect(buttonElement.textContent).toContain('Salvar');
  });
});
