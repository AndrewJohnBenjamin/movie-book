import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from '../../data-services/tmdb.service';
import { Person } from '../../models/Person.model';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    const personId = activateRoute.paramMap.get('id');
    return this.tmdbService.getPerson(personId);
  }
}
