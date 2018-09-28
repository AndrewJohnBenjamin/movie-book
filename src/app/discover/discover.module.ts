import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    DiscoverComponent
  ],
  exports:  [ DiscoverComponent ]
})
export class DiscoverModule { }
