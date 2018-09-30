import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/TvShow.model';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  public tvShow: TvShow;

  constructor(private route: ActivatedRoute, private urlService: UrlService) {
  }

  public getCastMemberSmallPhotoUrl(imageName: string) {
    return this.urlService.getCastProfileUrl(imageName);
  }

  public getTvShowPosterUrl() {
    return this.urlService.getMoviePosterUrl(this.tvShow.poster_path);
  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
  }
}
