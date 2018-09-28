import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../shared/language.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient, private languageService: LanguageService) {
  }

  /**
   * A method that retrieves a list of latest cinema releases
   */
  public getLatestCinemaReleases = () => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/movie/now_playing?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }

  /**
   * A method that retrieves a list tv shows that are currently on the air
   */
  public getOnAirTvShows = () => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/tv/on_the_air?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}&page=1`
    ].join('');
    return this.http.get(url);
  }

  /**
   * A method that gets the movie with the supplied id
   * @param movieId the id of the movie to retrieve
   */
  public getMovie = (movieId: string) => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/movie/${movieId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }

  /**
 * A method that gets the tv show with the supplied id
 * @param tvShowId the id of the tv show to retrieve
 */
  public getTvShow = (tvShowId: string) => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/tv/${tvShowId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }

  /**
* A method that gets a person with the supplied id
* @param personId the id of the person to retrieve
*/
  public getPerson = (personId: string) => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/person/${personId}?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }
}
