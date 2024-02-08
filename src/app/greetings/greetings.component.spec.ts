import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreetingsComponent } from './greetings.component';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('La prueba ha sida exitosa', () => {
    expect(component).toBeTruthy();
  });

  it('La prueba ha sida exitosa', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje')).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje);
  });

  it('La prueba ha sida exitosa', () => {
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje1')).nativeElement;
    expect(mensajeElement.textContent).toContain(component.mensaje1);
  });
});