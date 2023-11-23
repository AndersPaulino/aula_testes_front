import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2 - Verifica se o formulário contém um campo de texto para o login
  it('TESTE 2 - Verifica se o formulário contém um campo de texto para o login', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('input[name="exampleInputText1"]');
    expect(inputElement).toBeTruthy();
  });

  // CASO DE TESTE 3 - Verifica se o formulário contém um campo de senha
  it('TESTE 3 - Verifica se o formulário contém um campo de senha', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('input[name="exampleInputPassword1"]');
    expect(inputElement).toBeTruthy();
  });

  // CASO DE TESTE 4 - Verifica se o botão de logar está presente
  it('TESTE 4 - Verifica se o botão de logar está presente', () => {
    const compiled = fixture.debugElement.nativeElement;
    const buttonElement = compiled.querySelector('button[type="submit"]');
    expect(buttonElement.textContent).toContain('Logar');
  });

  // CASO DE TESTE 5 - Verifica se o usuário é redirecionado para a rota 'admin/pedidos' ao fazer login com credenciais corretas
it('TESTE 5 - Redirecionamento ao fazer login com credenciais corretas', () => {
  spyOn(component.roteador, 'navigate');
  component.usuario.login = 'admin';
  component.usuario.senha = 'admin';
  component.logar();
  expect(component.roteador.navigate).toHaveBeenCalledWith(['admin/pedidos']);
});

// CASO DE TESTE 6 - Verifica se é exibido um alerta ao fazer login com credenciais incorretas
it('TESTE 6 - Exibição de alerta ao fazer login com credenciais incorretas', () => {
  spyOn(window, 'alert');
  component.usuario.login = 'user';
  component.usuario.senha = 'wrongpassword';
  component.logar();
  expect(window.alert).toHaveBeenCalledWith('Login ou senha incorretos!');
});
});
