import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../shared/services';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ascytra-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
