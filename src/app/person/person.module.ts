import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonRoutesModule } from './routes/person-routes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    PersonRoutesModule
  ],
  declarations: [
    PersonComponent
  ],
  exports:  [ PersonComponent ]
})
export class PersonModule { }
