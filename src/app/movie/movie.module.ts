import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieRoutesModule } from './routes/movie-routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    MovieRoutesModule
  ],
  declarations: [
    MovieComponent
  ],
  exports:  [ MovieComponent ]
})
export class MoviesModule { }
