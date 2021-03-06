import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const materials = [
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatProgressBarModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatMenuModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
 
]

@NgModule({

  imports:[materials],
  exports:[materials]
})
export class MaterialModule { }
