import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../models/ApiConfig.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public apiConfig: ApiConfig;
  private defaultPersonPhotoUrl = '/assets/images/default-photo.png';
  private defaultMovieAndTvPhotoUrl = '/assets/images/default-movie-tv-photo.png';

  constructor(private http: HttpClient) {
  }

  /**
   * A method that retrieves the base api config that contains image url information
   */
  public getBaseConfig() {
    return this.http.get(`https://api.themoviedb.org/3/configuration?api_key=${environment.apiKey}`)
      .toPromise().then((apiConfig: ApiConfig) => {
        this.apiConfig = apiConfig;
      });
  }

  /**
   * A method that retrieves a movie poster image url
   * @param fileName the name of the image file to retrieve the url for
   */
  public getMoviePosterUrl(fleName: string) {
    if (!fleName) {
      return this.defaultMovieAndTvPhotoUrl;
    }

    return `${this.apiConfig.images.base_url}w185/${fleName}`;
  }

  /**
 * A method that retrieves a persons profile picture url
 * @param fileName the name of the image file to retrieve the url for
 */
  public getPersonProfileUrl(fileName: string) {
    if (!fileName) {
      return this.defaultPersonPhotoUrl;
    }

    return `${this.apiConfig.images.base_url}w185/${fileName}`;
  }

  /**
* A method that retrieves a cast members profile image url
* @param fileName the name of the image file to retrieve the url for
*/
  public getCastMemberPhotoUrl(fileName: string) {
    if (!fileName) {
      return this.defaultPersonPhotoUrl;
    }

    return `${this.apiConfig.images.base_url}w138_and_h175_face/${fileName}`;
  }

  /**
  * A method that retrieves the url for the supplied in the supplied size
  * @param fileName the name of the image file to retrieve the url for
  * @param size the size of the image to retrieve
  */
  public getImageUrl(fileName: string, size: string) {
    return `${this.apiConfig.images.base_url}${size}/${fileName}`;
  }
}
