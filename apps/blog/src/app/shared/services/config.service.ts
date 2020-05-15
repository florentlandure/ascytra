import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IConfig } from '../models';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  getAll(): Observable<IConfig> {
    return of({
      twitterUrl: 'https://twitter.com/Ascytra',
      githubUrl: 'https://github.com/florentlandure',
    });
  }
}
