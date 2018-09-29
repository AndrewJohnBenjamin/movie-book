import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTabsModule } from '@angular/material';
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
    TvShowRoutesModule,
    MatTabsModule
  ],
  declarations: [
    TvShowComponent
  ],
  exports:  [ TvShowComponent ]
})
export class TvShowModule { }
