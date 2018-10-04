import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'tropes-search-component',
  templateUrl: './tropes.component.html',
  styleUrls: ['./tropes.component.scss']
})

export class TropesComponent implements OnInit {
	@Input() trope: FormGroup;

	tropes = [
	{name:"poirotTriesToPreventMurder"  , checked:false, display:"Poirot tries to prevent a murder"},
	{name:"poirotTriesToPreventCrime"   , checked:false, display:"Poirot tries to prevent other crime"},
	{name:"poirotLenientJudgeAndJury" 	, checked:false, display:"Poirot does not punish a guilty party"},
	{name:"poirotCompulsiveSymmetry" 	  , checked:false, display:"Poirot is obsessed with symmetry"},
	{name:"poirotIsReallyBelgian" 			, checked:false, display:"Poirot is mistaken for French"},
	{name:"poirotSolvesColdCase" 			  , checked:false, display:"Poirot solves a cold case"},
	{name:"poirotCommitsCrime"					, checked:false, display:"Poirot commits a crime"},
	{name:"poirotMatchmaker" 					  , checked:false, display:"Poirot plays matchmaker"},
	{name:"poirotRetirement" 					  , checked:false, display:"Poirot enjoys retirement"},
	{name:"poirotAvuncular" 						, checked:false, display:"Poirot acts as avuncular to a younger lady"},
	{name:"poirotOnHoliday" 						, checked:false, display:"Poirot is on holiday"},
	{name:"poirotSmitten"  						  , checked:false, display:"Poirot is in love"},
	{name:"poirotDentist" 							, checked:false, display:"Poirot goes to the dentist"},
	{name:"perpTriesToOutmartPoirot" 	  , checked:false, display:"A criminal intentionally involves Poirot in the plot"},
	{name:"hastingsLadyPuzzlement"  		, checked:false, display:"Hastings does not understand women"},
	{name:"hastingsSolvesCase" 				  , checked:false, display:"Hastings solves the case"},
	{name:"hastingsSmitten" 						, checked:false, display:"Hastings is in love"},
	{name:"hastingsTravel" 					  	, checked:false, display:"Hastings travels abroad"},
	{name:"hastingsHobby" 							, checked:false, display:"Hastings takes up a hobby"},
	{name:"hastingsGolf" 							  , checked:false, display:"Hastings plays golf"},
	{name:"hastingsCar"  							  , checked:false, display:"Hastings is a car enthusiast"},
	{name:"msLemonOrderAndMethod" 			, checked:false, display:"Ms. Lemon does detective work"},
	{name:"msLemonsFilingSystem" 			  , checked:false, display:"Ms. Lemon uses her filing system"},
	{name:"msLemonSupernatural" 				, checked:false, display:"Ms. Lemon is supernatural"},
	{name:"frenchVsEnglishCuisine"			, checked:false, display:"Episode features French vs. English cuisine"},
	{name:"diggingUpThePast" 					  , checked:false, display:"Setting is in an archaeological dig"},
	{name:"artImitatesArt"							, checked:false, display:"Episode involves a murder-mystery play or book"},
	{name:"hostIsMurdered" 						  , checked:false, display:"The host is murdered at or after their own event"},
	{name:"bridgeGame" 								  , checked:false, display:"Characters play the card game Bridge"},
	{name:"bonVoyage" 									, checked:false, display:"Crime scene is on a train, plane or boat"},
	{name:"christmasSpecial"						, checked:false, display:"Christmas special"}
];

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
  	this.trope = <FormGroup>this.controlContainer.control;
  }

}
