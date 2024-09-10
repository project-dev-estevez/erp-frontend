import { Component, OnInit } from '@angular/core';
import { ResponseGetProjectByIdDto } from '../../interfaces/get-project-by-id.dto';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-project-page',
  templateUrl: './show-project-page.component.html',
  styleUrl: './show-project-page.component.scss'
})
export class ShowProjectPageComponent implements OnInit {
  
  public project!: ResponseGetProjectByIdDto;

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ){}
  
  ngOnInit(): void {
    this.loadProject();
  }

  private loadProject(){

    const route = this.router.url;
    if( !route.includes( 'show' ) ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.projectsService.getProjectById(id);
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');
        console.log(response);
        this.project = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Proyecto por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

}
