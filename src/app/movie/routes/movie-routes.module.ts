import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie.component';
import { MovieResolver } from './movie.resolver';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent,
    resolve: {
      movie: MovieResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    MovieResolver
  ]
})

export class MovieRoutesModule { }
