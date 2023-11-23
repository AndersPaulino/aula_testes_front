import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosdetailsComponent } from './pedidosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2 - Verifica se o formulário contém um campo de texto para observações
  it('TESTE 2 - Verifica se o formulário contém um campo de texto para observações', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('input[name="exampleInputText1"]');
    expect(inputElement).toBeTruthy();
  });

  // CASO DE TESTE 3 - Verifica se o botão de lançar produto está presente
  it('TESTE 3 - Verifica se o botão de lançar produto está presente', () => {
    const compiled = fixture.debugElement.nativeElement;
    const buttonElement = compiled.querySelector('button[type="button"]');
    expect(buttonElement.textContent).toContain('Lançar produto');
  });

});
