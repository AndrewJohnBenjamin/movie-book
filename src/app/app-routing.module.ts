import { MoviesInTheatresResolver } from './shared/movies-in-threatres.resolver';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OnAirShowsResolver } from './shared/on-air-shows.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      moviesInTheatres: MoviesInTheatresResolver,
      onAirTvShows: OnAirShowsResolver
    },
    runGuardsAndResolvers: 'always'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [MoviesInTheatresResolver, OnAirShowsResolver]
})
export class AppRoutingModule { }
