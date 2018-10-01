import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVShow } from '../models/TVShow.model';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  public tvShow: TVShow;

  constructor(private route: ActivatedRoute, private urlService: UrlService) {
  }

  /**
   * Gets the url to the supplied cast member photo
   * @param imageName the name of the image to retrieve
   */
  public getCastMemberPhotoUrl(imageName: string) {
    return this.urlService.getCastMemberPhotoUrl(imageName);
  }

  /**
   * Gets the url to the tv poster for the tv show that this component makes use of
   */
  public getTvShowPosterUrl() {
    return this.urlService.getMoviePosterUrl(this.tvShow.poster_path);
  }

  /**
   * Angular on init lifecycle hook
   */
  public ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
  }
}
