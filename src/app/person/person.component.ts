import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/Person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  public person: Person;

  constructor(private route: ActivatedRoute, private urlService: UrlService) {
  }

  /**
   * A method that gets the profile picture/image for the person on this component
   */
  public getProfileImageUrl() {
    return this.urlService.getPersonProfileUrl(this.person.profile_path);
  }

  /**
   * A method that retrieves a small movie poster image
   * @param imageName the name of the image to retrieve
   */
  public getSmallMoviePosterUrl(imageName: string) {
    return this.urlService.getMoviePosterUrl(imageName);
  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.person = this.route.snapshot.data.person;
  }
}
