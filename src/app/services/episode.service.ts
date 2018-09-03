import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { SearchResult } from '../shared/searchResult';

@Injectable()
export class EpisodeService {

  constructor(private restangular: Restangular) { }

  getAll(): Observable<SearchResult[]> {
  	return this.restangular.all().getList();
  }

}
