import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'basic-search-component',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

export class BasicComponent implements OnInit {
	@Input() basic: FormGroup;
	@Input() sharedFormErrors:{}; 

	seasonErrMess: any;
	episodeErrMess: any;

		episodeMaxList = [
			{	season: 1,  episodeMax: 10 },
			{ season: 2,  episodeMax: 9 },
			{ season: 3,  episodeMax: 11 },
			{ season: 4,  episodeMax: 3 },
			{ season: 5,  episodeMax: 8 },
			{ season: 6,  episodeMax: 4 },
			{ season: 7,  episodeMax: 2 },
			{ season: 8,  episodeMax: 2 },
			{ season: 9,  episodeMax: 4 },
			{ season: 10, episodeMax: 4 },
			{ season: 11, episodeMax: 4 },
			{ season: 12, episodeMax: 4 },
			{ season: 13, episodeMax: 5 }
			];

	titleParams = [
	{display:'Season', 				type:'text', name:"season",  placeholder:'(1-13)'},
	{display:'Episode', 			type:'text', name:"episode", placeholder:'(varies)'},
	{display:'Episode Title', type:'text', name:"title",   placeholder:'Adventure of.../ Murder on...'}
	];

	moods = [
	{value: ''				, display:'None'},
	{value: 'light'		, display:'Light'},
	{value: 'serious'	, display:'Serious'},
	{value: 'dark'		, display:'Dark'}
	];

	mainCharacters = [
		{ value: 'hastings', name: 'Captain Hastings', checked:false},
		{ value: 'lemon' , name: 'Miss Lemon', checked:false},
		{ value: 'oliver' , name: 'Miss Oliver', checked:false},
		{ value: 'japp', name: 'Inspector Japp', checked:false}
	];

	get selectedOptions() {
		return this.mainCharacters
							.filter(opt => opt.checked)
							.map(opt => opt.value)
	}

	constructor(private controlContainer: ControlContainer) { }

	seasonCheck(season) {
		console.log(this.basic);
		this.seasonErrMess = false;
		let err = false;

		if (season == "" || undefined) {
			err = false;
			return this.seasonErrMess = false;
		}

		if (season > 13 || season < 1 || isNaN(season)) {
			return this.seasonErrMess = "Only season numbers between 1-13 are valid";
		}

		return this.seasonErrMess = err;
	}

	episodeCheck(season,episode) {
		this.episodeErrMess = false;
		if (episode == "" || undefined) {
			return this.episodeErrMess = false;
		}

		if (episode < 1 || isNaN(episode)) {
	 		return this.episodeErrMess = "Only positive numbers are valid";
		}

		if (episode > 11) {
			return this.episodeErrMess = "No season has more than 11 episodes";
		}

		if (season < 14 && season > 0 && episode) { 
				let episodeMax = this.episodeMaxList.find(i => i.season == Number(season)).episodeMax; 
			if (episode > episodeMax) {
				// this.basic.setErrors(true);
				return this.episodeErrMess = "Season " + season + " has only " + episodeMax + " episodes";
			}
		}
		}

	ngOnInit() {
		this.seasonErrMess = false;
		this.episodeErrMess = false;
		this.basic = <FormGroup>this.controlContainer.control;
	}

}