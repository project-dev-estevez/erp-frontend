import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressBarComponent implements OnInit, OnDestroy
{
  public loading = false;
  private routerSubscription: Subscription | undefined = undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.loadRoutingSpinner();
  }

  /**
   * Activar o desactivar barra de progreso cuando se navega entre las rutas del sistema
   */
  loadRoutingSpinner(): void
  {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      const isNavigationStart = event instanceof NavigationStart;
      const loading = isNavigationStart ? 
                                          true : 
                                          (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) ? 
                                          false : 
                                          this.loading;
      this.loading = loading;
    });
  }

  ngOnDestroy(): void 
  {
    if (this.routerSubscription) 
    {
      this.routerSubscription.unsubscribe();
    }
  }

}
