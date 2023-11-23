import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //CASO DE TESTE 1
  it('TESTE 1 - Criação OK do Componente', () => {
    expect(component).toBeTruthy();
  });

  // CASO DE TESTE 2
  it('TESTE 2 - Verifica se a navbar contém um link para a página de login', () => {
    const compiled = fixture.debugElement.nativeElement;
    const loginLink = compiled.querySelector('a[href="/login"]');
    expect(loginLink).toBeTruthy();
  });

  // CASO DE TESTE 3
  it('TESTE 3 - Verifica se o botão de navegação está presente', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navbarToggler = compiled.querySelector('.navbar-toggler');
    expect(navbarToggler).toBeTruthy();
  });
});
