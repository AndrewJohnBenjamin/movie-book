import { TVShow } from '../models/TVShow.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../shared/language.service';
import { environment } from '../../environments/environment';
import { Person } from '../models/Person.model';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie.model';
import { GenericSearchResults } from '../models/GenericSearchResult';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  constructor(private http: HttpClient, private languageService: LanguageService) {
  }

  /**
   * A method that retrieves a list of latest cinema releases
   */
  public getLatestCinemaReleases() {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/movie/now_playing?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }

  /**
   * A method that retrieves a list tv shows that are currently on the air
   */
  public getOnAirTvShows() {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/tv/on_the_air?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}&page=1`
    ].join('');
    return this.http.get(url);
  }

  /**
   * A method that gets the movie with the supplied id
   * @param movieId the id of the movie to retrieve
   * @param appendToResponse any additional queries/data that should be appended to this response
   */
  public getMovie(movieId: string, appendToResponse?: string): Observable<Movie> {
    let url = [
      `${environment.apiUrl}/${environment.apiVersion}/movie/${movieId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');

    if (appendToResponse) {
      url += `&append_to_response=${appendToResponse}`;
    }

    return this.http.get(url);
  }

  /**
 * A method that gets the tv show with the supplied id
 * @param tvShowId the id of the tv show to retrieve
 * @param appendToResponse any additional queries/data that should be appended to this response
 */
  public getTvShow(tvShowId: string, appendToResponse?: string): Observable<TVShow> {
    let url = [
      `${environment.apiUrl}/${environment.apiVersion}/tv/${tvShowId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');

    if (appendToResponse) {
      url += `&append_to_response=${appendToResponse}`;
    }

    return this.http.get<TVShow>(url);
  }

  /**
* A method that gets a person with the supplied id
* @param personId the id of the person to retrieve
* @param appendToResponse any additional queries/data that should be appended to this response
*/
  public getPerson(personId: string, appendToResponse: string): Observable<Person> {
    let url = [
      `${environment.apiUrl}/${environment.apiVersion}/person/${personId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');

    if (appendToResponse) {
      url += `&append_to_response=${appendToResponse}`;
    }

    return this.http.get<Person>(url);
  }

  /**
   * A method that queries the api for movies, people and tv shows
   * @param searchTerm the search term to query the api with
   */
  public executeSearch(searchTerm: string): Observable<GenericSearchResults> {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/search/multi?api_key=${environment.apiKey}`,
      `&query=${searchTerm}&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');

    return this.http.get<GenericSearchResults>(url);
  }
}
