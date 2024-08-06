import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  presentSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  presentError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }

  presentDelete( name: string )
  {
    return Swal.fire({
      title: 'Estas Seguro?',
      text: `Eliminará: ${name}`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Estoy seguro'
    });
  }

}
