import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { SearchResult } from '../shared/searchResult';

@Injectable()
export class EpisodeService {

  constructor(private restangular: Restangular) { }

  getAll(): Observable<SearchResult[]> {
  	return this.restangular.all('episode').getList();
  }

  getEpisodeById(episodeId:string): Observable<any> {
  	return this.restangular.one('id', episodeId).get();
  }

  globalSearch(payload): Observable<SearchResult[]> {
  	console.log(payload);
  	return this.restangular.all("episode").customGET("global", payload);
  }

}
