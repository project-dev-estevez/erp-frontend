import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer-entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CreateCustomerDto } from '../../interfaces/create-customer.dto';
import { UpdateCustomerDto } from '../../interfaces/update-customer.dto';

@Component({
  selector: 'app-create-or-edit-customer-page',
  templateUrl: './create-or-edit-customer-page.component.html',
  styleUrl: './create-or-edit-customer-page.component.scss'
})
export class CreateOrEditCustomerPageComponent implements OnInit {
  
  private customerId: string = '';

  public customers: Customer[] = [];

  public customerForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(150) ]],
    rfc: ['', [ Validators.required, Validators.maxLength(13) ]],
    email: ['', [ Validators.required, Validators.email, Validators.minLength(8) ]],
    phoneNumber: ['', [ Validators.required, Validators.maxLength(10) ]],
  });

  constructor(
    private customersService: CustomersService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.checkIsUpdate();
  }

  private createCustomer() {

    const createCustomerDto: CreateCustomerDto = this.customerForm.value;

    this.customersService.createCustomer( createCustomerDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess(`El Cliente ${name} se ha creado con éxito`);
        this.redirectToList(); 
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el Área...');
      }
    );
  }

  private updateCustomer() {
    
    const updateCustomerDto: UpdateCustomerDto = this.customerForm.value;

    this.customersService.updateCustomerById( this.customerId, updateCustomerDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`El Cliente ${response.name} se ha actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando el Cliente...');
      }
    );
  }

  private checkIsUpdate() {

    const route = this.router.url;
    if( !route.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => { 
        this.customerId = id;
        return this.customersService.getCustomerById( id );
      })
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');
        
        this.customerForm.reset({
          name: response.name,
          rfc: response.rfc,
          email: response.email,
          phoneNumber: response.phoneNumber,
        });

        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Cliente por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.customerId ) {
      this.updateCustomer();
      return;
    }

    // Crear
    this.createCustomer();       
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/customers');
  }

}
