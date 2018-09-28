import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover.component';
import { DiscoverRoutesModule } from './routes/discover-routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    DiscoverRoutesModule
  ],
  declarations: [
    DiscoverComponent
  ],
  exports:  [ DiscoverComponent ]
})
export class DiscoverModule { }
