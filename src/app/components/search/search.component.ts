import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// import service goes here

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

	basicSearchGroup: FormGroup;
	crimeSearchGroup: FormGroup;

	constructor( 
		@Inject(FormBuilder) fb: FormBuilder
		) {
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
				'victim':''
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
				'bonVoyage': 									false,
				'director':'None',
				'writer':'None'
			})

}

	ngOnInit() {
	}

	onSubmit() {
	}

	}

