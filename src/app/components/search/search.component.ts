import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EpisodeService } from '../../services/episode.service';
import { SearchResult } from '../../shared/searchResult';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

	searchResult: SearchResult
	errMess: string;
	mainSearchGroup: FormGroup
	mainCharacterValues: [];
	tropeValues: [];

	constructor( 
		@Inject(FormBuilder) fb: FormBuilder,
  	@Inject('BaseURL') private BaseURL,
		private episodeService: EpisodeService,
		) {

		this.mainCharacterValues = ['hastings','lemon','oliver','japp'];
		this.tropeValues = [
		'poirotTriesToPreventMurder',
		'poirotTriesToPreventCrime',
		'poirotLenientJudgeAndJury',
		'poirotCompulsiveSymmetry',
		'poirotIsReallyBelgian',
		'poirotSolvesColdCase',
		'poirotCommitsCrime',
		'poirotMatchmaker',
		'poirotRetirement',
		'poirotAvuncular',
		'poirotOnHoliday',
		'poirotSmitten',
		'poirotDentist',
		'hastingsLadyPuzzlement',
		'hastingsSolvesCase',
		'hastingsSmitten',
		'hastingsTravel',
		'hastingsHobby',
		'hastingsGolf',
		'hastingsCar',
		'msLemonOrderAndMethod',
		'msLemonsFilingSystem',
		'msLemonSupernatural',
		'perpTriesToOutmartPoirot',
		'frenchVsEnglishCuisine',
		'diggingUpThePast',
		'christmasSpecial',
		'artImitatesArt',
		'hostIsMurdered',
		'bridgeGame',
		'bonVoyage'];

		this.mainSearchGroup = fb.group({
				'season':'',
				'episode':'',
				'title':'',
				'mood':'',
				'hastings':false,
				'lemon':false,
				'oliver':false,
				'japp':false,
				'criminalAct':'',
				'means':'',
				'motive':'',
				'opportunity':'',
				'perpetrator':'',
				'victim':'',
				'director':'',
				'writer':'',
				'poirotTriesToPreventMurder': false,
				'poirotTriesToPreventCrime':  false,
				'poirotLenientJudgeAndJury': 	false,
				'poirotCompulsiveSymmetry': 	false,
				'poirotIsReallyBelgian': 			false,
				'poirotSolvesColdCase': 			false,
				'poirotCommitsCrime':					false,
				'poirotMatchmaker': 					false,
				'poirotRetirement': 					false,
				'poirotAvuncular': 						false,
				'poirotOnHoliday': 						false,
				'poirotSmitten':  						false,
				'poirotDentist': 							false,
				'hastingsLadyPuzzlement':  		false,
				'hastingsSolvesCase': 				false,
				'hastingsSmitten': 						false,
				'hastingsTravel': 						false,
				'hastingsHobby': 							false,
				'hastingsGolf': 							false,
				'hastingsCar':  							false,
				'msLemonOrderAndMethod': 			false,
				'msLemonsFilingSystem': 			false,
				'msLemonSupernatural': 				false,
				'perpTriesToOutmartPoirot': 	false,
				'frenchVsEnglishCuisine':			false,
				'diggingUpThePast': 					false,
				'christmasSpecial':						false,
				'artImitatesArt':							false,
				'hostIsMurdered': 						false,
				'bridgeGame': 								false,
				'bonVoyage': 									false
			})
}

	ngOnInit() {
	}

	fixBooleans(obj, valuesArray, key) {
		// This is a helper function that either:
		// creates the trope/mainCharacter object if it doesn't exist, or
		// adds the trope/mainCharacter to the existing if there are multiple.

		if (obj[valuesArray]  == undefined) {
			obj[valuesArray] = key;
		}else{
			obj[valuesArray] = obj[valuesArray] + "," + key;
		}
	}

	cleanPayload(obj) {
		// This takes the FormGroup data and:
		// 0. throws out any empty form data where key:false or empty, or
		// 1. adds the key to the payload where key:true, and
		// 2. prefixes mainCharacter key for database if applicable , or
		// 3. prefixes trope key for database if applicable.

		let newobj = {};
		for (var key in obj) {
			if (obj.hasOwnProperty(key) && obj[key] !=false){
				if (this.mainCharacterValues.includes(key)) {
					this.fixBooleans(newobj, "mainCharacters", key)
			} else if (this.tropeValues.includes(key)) {
					this.fixBooleans(newobj, "tropes", key)
			} else {
				newobj[key] = obj[key];}
			}
		}
		return newobj;
	}

	onSubmit() {
		var keys = Object.keys(this.mainSearchGroup.value);
		var cleaned = this.cleanPayload(this.mainSearchGroup.value);
		this.episodeService.globalSearch(cleaned)
		.subscribe(
			serviceResponse => this.searchResult = serviceResponse,
			errmess => this.errMess = <any>errmess);
	}
}