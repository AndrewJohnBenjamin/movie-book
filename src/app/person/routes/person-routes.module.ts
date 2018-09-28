import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from '../person.component';
import { PersonResolver } from './person.resolver';

const routes: Routes = [
  {
    path: 'person/:id',
    component: PersonComponent,
    resolve: {
      person: PersonResolver
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    PersonResolver
  ]
})
export class PersonRoutesModule { }
