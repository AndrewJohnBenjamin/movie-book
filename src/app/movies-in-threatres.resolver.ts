import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from './data-services/tmdb.service';
import { Movie } from './models/Movie.model';
import { SearchResponse } from './models/SearchResponse';
import { MovieSearchResult } from './models/MovieSearchResult.model';

@Injectable()
export class MoviesInTheatresResolver implements Resolve<Array<MovieSearchResult>> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    return this.tmdbService.getLatestCinemaReleases().toPromise().then((searchResponse: SearchResponse<MovieSearchResult>) => {
      return searchResponse.results.splice(0, 3);
    });
  }
}
