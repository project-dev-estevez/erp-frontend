import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ResponseGetCustomerByIdDto } from '../../interfaces/get-customer-by-id.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-customer-page',
  templateUrl: './show-customer-page.component.html',
  styleUrl: './show-customer-page.component.scss'
})
export class ShowCustomerPageComponent implements OnInit {
  
  public customer!: ResponseGetCustomerByIdDto;

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ) { }
  
  ngOnInit(): void {
    this.loadCustomer();
  }

  private loadCustomer() {

    const route = this.router.url;
    if( !route.includes('show') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.customersService.getCustomerById( id );
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');        
        console.log(response);
        this.customer = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Cliente por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

}
