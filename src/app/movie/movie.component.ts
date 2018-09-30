import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movie: Movie;
  public posterPath: string;
  constructor(private route: ActivatedRoute, private urlService: UrlService) {

  }

  /**
   * A method that retrieves a small image of a cast member
   * @param imageName the name of the image to retrieve
   */
  public getCastMemberSmallPhotoUrl(imageName: string) {
    return this.urlService.getCastProfileUrl(imageName);
  }

  /**
   * A method that retrieves a poster
   */
  public getMoviePosterUrl() {
    return this.urlService.getMoviePosterUrl(this.movie.poster_path);
  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }
}
