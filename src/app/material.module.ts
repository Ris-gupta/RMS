import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule
  ]
})

export class MaterialModule {}
