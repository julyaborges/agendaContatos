import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNovo } from './login-novo';

describe('LoginNovo', () => {
  let component: LoginNovo;
  let fixture: ComponentFixture<LoginNovo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginNovo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNovo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
