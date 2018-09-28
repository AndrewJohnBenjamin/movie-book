import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonRoutesModule } from './routes/person-routes.module';
import { MovieRoutesModule } from '../movie/routes/movie-routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    PersonRoutesModule,
    MovieRoutesModule,
    MatTabsModule
  ],
  declarations: [
    PersonComponent
  ],
  exports:  [ PersonComponent ]
})
export class PersonModule { }
