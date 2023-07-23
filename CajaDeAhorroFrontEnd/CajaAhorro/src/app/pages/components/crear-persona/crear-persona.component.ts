import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent {

  validationForm: FormGroup;

  constructor(private http: HttpClient) {
    this.validationForm = new FormGroup({
      cedula: new FormControl(null,[ Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
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
      const persona = this.validationForm.value ;
      console.log(persona);
      this.http.post('http://localhost:8080/crearPersona', persona).subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.error(error);
      });
      console.log("Formulario valido");
      
    }
  }
}
