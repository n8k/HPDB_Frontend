import { Component, OnInit, Inject } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { SearchResult } from '../../shared/searchResult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

	searchResult: SearchResult
	errMess: string;

  constructor(
  	private episodeService: EpisodeService,
  	@Inject('BaseURL') private BaseURL
  	) { }

  ngOnInit() {
  	this.episodeService.getAll()
  	.subscribe(serviceResponse => this.searchResult = serviceResponse,
  		errmess => this.errMess = <any>errmess);
  }

}
