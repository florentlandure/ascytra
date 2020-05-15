import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../shared/services/config.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ascytra-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  twitterUrl = 'https://twitter.com/Ascytra';
  githubUrl = 'https://github.com/florentlandure';

  constructor(protected configService: ConfigService) {}

  ngOnInit(): void {
    this.configService
      .getAll()
      .pipe(take(1))
      .subscribe((config) => {
        this.twitterUrl = config.twitterUrl;
        this.githubUrl = config.githubUrl;
      });
  }
}
