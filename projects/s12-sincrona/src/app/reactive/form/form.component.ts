import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Crear atributo de tipo formBuilder
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  //Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
  dni: [ '', [Validators.required, Validators.pattern('[0-9]{8}')]],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  ciudad: ['', Validators.required],
  });

  //Generar un metodo get para cada campo del formulario reactivo
  get dni() { return this.registroForm.get('dni'); }
  get nombres() { return this.registroForm.get('nombres'); }
  get apellidos() { return this.registroForm.get('apellidos'); }
  get ciudad() { return this.registroForm.get('ciudad'); }


  //Generar el metodo onSubmit para registrar los datos del formluario en un Array
  datos = new Array;

  onSubmit(){
    if(!this.registroForm.valid) {
      alert('Alguna validacion no se ha cumplido');
      return;
    }

    this.datos.push({
    'Dni': this.registroForm.get('dni')?.value,
    'Nombres': this.registroForm.get('nombres')?.value,
    'Apellidos': this.registroForm.get('apellidos')?.value,
    'Ciudad': this.registroForm.get('ciudad')?.value,
    });

    console.log(this.datos);
  }

  Refrescar() {
    this.registroForm.reset();
  }

}