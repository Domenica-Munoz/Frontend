import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent {

  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      Cedula: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      Nombre: new FormControl(null, [Validators.required]),
      Correo: new FormControl(null, [Validators.required]),
      Direccion: new FormControl(null, [Validators.required]),
      Telefono: new FormControl(null, [Validators.required]),
    });
   }

  ngOnInit(): void {
    console.log("Hola");
  }

  submitForm(): void {
    for (const i in this.validationForm.controls) {
      this.validationForm.controls[i].markAsDirty();
      this.validationForm.controls[i].updateValueAndValidity();
    }

    if (this.validationForm.valid) {
      //Aqui debe consumirse el servicio de la api para crear la persona, lo dejo implementado para que se vea el formulario
      console.log("Formulario valido");
      console.log(this.validationForm.value);
    }
  }
}
