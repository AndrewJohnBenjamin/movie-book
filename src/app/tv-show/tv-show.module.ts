import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TvShowComponent } from './tv-show.component';
import { TvShowRoutesModule } from './routes/tv-show-routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    TvShowRoutesModule
  ],
  declarations: [
    TvShowComponent
  ],
  exports:  [ TvShowComponent ]
})
export class TvShowModule { }
