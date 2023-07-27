import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solicitudcredito',
  templateUrl: './solicitudcredito.component.html',
  styleUrls: ['./solicitudcredito.component.scss']
})
export class SolicitudcreditoComponent implements OnInit {
  solicitudForm: FormGroup;

  constructor(private http: HttpClient) {
    this.solicitudForm = new FormGroup({
      idSolicitud: new FormControl(Math.floor(Math.random() * 1000000), [Validators.required]),
      monto: new FormControl(null, [Validators.required]),
      cuenta: new FormControl(null, [Validators.required]),
      garantias: new FormControl(null, [Validators.required]),
      tipoPrestamo: new FormControl('', [Validators.required]),
    });
    
  }

  ngOnInit():void {
    console.log("Hola");
  }

  submitForm(): void {
    for (const i in this.solicitudForm.controls) {
      this.solicitudForm.controls[i].markAsDirty();
      this.solicitudForm.controls[i].updateValueAndValidity();
    }

    if (this.solicitudForm.valid) {
      //Aqui debe consumirse el servicio de la api para crear la persona, lo dejo implementado para que se vea el formulario
      const solicitudcredito = this.solicitudForm.value ;
      console.log(solicitudcredito);
      this.http.post('http://localhost:8080/crearSolicitud', solicitudcredito).subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.error(error);
      });
      console.log("Formulario valido");
      
    }
  } 
  
}
