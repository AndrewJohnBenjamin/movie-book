import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowComponent } from '../tv-show.component';
import { TvShowResolver } from './tv-show.resolver';

const routes: Routes = [
  {
    path: 'tv-show/:id',
    component: TvShowComponent,
    resolve: {
      tvShow: TvShowResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    TvShowResolver
  ]
})
export class TvShowRoutesModule { }
