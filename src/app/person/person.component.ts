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
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.person = this.route.snapshot.data.person;
  }
}
