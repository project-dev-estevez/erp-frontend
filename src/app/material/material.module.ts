import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/excel.svg')
    );
  }
}
