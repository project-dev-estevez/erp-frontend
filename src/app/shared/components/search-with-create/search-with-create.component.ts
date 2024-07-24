import { Component, Input, OnInit, output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-with-create',
  templateUrl: './search-with-create.component.html',
  styleUrl: './search-with-create.component.scss'
})
export class SearchWithCreateComponent implements OnInit{

  @Input() buttonText: string = 'Crear';
  @Input() searchPlaceholder: string = 'Buscar...';

  public onClickInCreate = output<void>();
  public onSearchFilter = output<string>();

  // Lo que se va ingresando en el campo de busqueda.
  public termInput = new FormControl();

  ngOnInit(): void {
    this.termInput.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      term => {
        this.onSearchFilter.emit( term );
      }
    );
  }

  emitCreateEvent()
  {
    this.onClickInCreate.emit();
  }

}
