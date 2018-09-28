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
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
  }
}
