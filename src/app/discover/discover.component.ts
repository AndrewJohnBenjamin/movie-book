import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  constructor(private route: ActivatedRoute, private urlService: UrlService) {

  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
  }
}
