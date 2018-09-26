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

  public getLatestCinemaReleases = () => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/discover/movie?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}`
    ].join('');
    return this.http.get(url);
  }

  public getOnAirTvShows = () => {
    const url = [
      `${environment.apiUrl}/${environment.apiVersion}/tv/on_the_air?api_key=${environment.apiKey}`,
      `&language=${this.languageService.getLanguageFromLocalStorage()}&page=1`
    ].join('');
    return this.http.get(url);
  }

  // public movieSearch = (searchTerm: string) => {
  //   const url = [
  //     `${environment.apiUrl}/${environment.apiVersion}/discover/movie?api_key=${environment.apiKey}`,
  //     `&${searchTerm}&language=${this.languageService.getLanguageFromLocalStorage()}`
  //   ].join('');
  //   return this.http.get(url);
  // }
}
