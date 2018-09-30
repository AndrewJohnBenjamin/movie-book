import { RouterModule } from '@angular/router';
import { EntertainmentTileComponent } from './entertainment-tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [ EntertainmentTileComponent ],
  exports: [ EntertainmentTileComponent ]
})
export class EntertainmentTileModule { }
