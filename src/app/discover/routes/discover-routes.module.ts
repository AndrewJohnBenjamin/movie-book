import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from '../discover.component';

const routes: Routes = [
  {
    path: 'discover',
    component: DiscoverComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    DiscoverComponent
  ]
})
export class DiscoverRoutesModule { }
