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

  preparePayload(payload) {
  	let newPayload = {};
  	let stringValues 	 = ['season','episode','title','director','writer','mood','perpetrator', 'victim','criminalAct','means','motive','opportunity'];
  	let mainCharacterValues = ['hastings','lemon','oliver','japp'];
  	let tropeValues = [
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

  	for (var key in payload) {
  		if (mainCharacterValues.includes(key)) {
  			newPayload[key] = payload[key];
  		};

  		if (stringValues.includes(key)) {
  			newPayload['mainCharacters'].push(key);
  		};

  		if (tropeValues.includes(key)) {
  			newPayload['tropes'].push(key);
  		};
  	}

  	return newPayload;
  }

  globalSearch(payload) {
  	let searchObject = this.preparePayload(payload);
  	return this.restangular.all(searchObject).getList();


  	// http://localhost:3000/episode/global?mainCharacters=hastings,lemon,japp
  	// http://localhost:3000/episode/global?mainCharacters=hastings,lemon,japp&season=2
  	// http://localhost:3000/episode/global?tropes=poirotOnHoliday&season=2
  	// http://localhost:3000/episode/global?title=adventure



  }

}
