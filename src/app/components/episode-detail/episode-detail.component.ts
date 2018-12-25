import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../services/episode.service';
// import { EpisodeDetail } from '../../shared/episodeDetail';
// import { MainCharacters } from '../../shared/episodeDetail';
// import { Tropes } from '../../shared/episodeDetail';
// import { CrimesArray } from '../../shared/episodeDetail';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

	episodeId: string;
	errMess: string;
	episodeDetail: {};
	mainCharacters: {};
	tropes: {};
	crimesArray: {};

  constructor(
    private location: Location,
  	private episodeService: EpisodeService,
  	private route:ActivatedRoute,
  	@Inject('BaseURL') private BaseURL
  	) { }

  ngOnInit() {
  	this.episodeId = this.route.params['value']['episodeId'];
  	this.episodeService.getEpisodeById(this.episodeId).subscribe(
  		serviceResponse=> {
  			this.episodeDetail = (({ 
  				// Object Destructuring and Property Shorthand:
  				// https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
  				season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }) => ({
  				season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }))(serviceResponse);
  		  this.mainCharacters = serviceResponse.mainCharacters;
  			this.tropes = serviceResponse.tropes;
  			this.crimesArray = serviceResponse.crimes;
  		}
		)
	}

  goBack(): void {
    this.location.back();
  }

}
