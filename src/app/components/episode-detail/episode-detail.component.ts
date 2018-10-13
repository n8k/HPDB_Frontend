import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../services/episode.service';
import { EpisodeDetail } from '../../shared/episodeDetail';
import { MainCharacters } from '../../shared/episodeDetail';
import { Tropes } from '../../shared/episodeDetail';
import { CrimesArray } from '../../shared/episodeDetail';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

	episodeId: string;
	errMess: string;
	episodeDetail: EpisodeDetail;
	mainCharacters: MainCharacters;
	tropes: Tropes;
	crimesArray: CrimesArray;
	keys: [];

  constructor(
    private location: Location,
  	private episodeService: EpisodeService,
  	private route:ActivatedRoute,
  	@Inject('BaseURL') private BaseURL
  	) { }

  ngOnInit() {
  	this.episodeId = this.route.params.value.episodeId;
  	this.episodeService.getEpisodeById(this.episodeId).subscribe(
  		serviceResponse=> {

  			// const object = { a: 5, b: 6, c: 7  };
  			// const picked = (({ season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }) => ({ season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }))(serviceResponse);

  			this.episodeDetail = (({ 
  				// Object Destructuring and Property Shorthand:
  				// https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
  				season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }) => ({
  				season, episode, title, episodeSummary, originalAirDate, supportingCharacters, director, writer, mood }))(serviceResponse);
  		  this.mainCharacters = serviceResponse.mainCharacters;
  		  this.tropes = serviceResponse.tropes;
  		  this.crimesArray = serviceResponse.crimes;
  		  () => {
  		  	for (var i in episodeDetail){
  		  		if episodeDetail.hasOwnProperty(i) {
  		  			this.keys.push(i);
  		  		}

  		  	}
  		  	return arr;
  		  }
				console.log("EpisodeDetail: ", this.episodeDetail);
				console.log("MainCharacters:", this.mainCharacters);
				console.log("Tropes:", this.tropes);
				console.log("Crimes:", this.crimesArray);
				console.log("Keys:", this.keys);

  		}
		)
	}



	// hack(val) {
	// 	//  https://github.com/angular/angular/issues/6392
	//   let newval = [];
	//   console.log("Val ",val);
	//   // for (var key in val) {
	//   // 	if (this.episodeDetail.hasOwnProperty(key)){
	//   // 		newval.push(key);
	//   // 	}
	//   // }
	//   return Array.from(val);
	// }	
  
  goBack(): void {
    this.location.back();
  }

}
