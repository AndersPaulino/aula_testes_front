import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FooterComponent);
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
