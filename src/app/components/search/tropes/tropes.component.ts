import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'tropes-search-component',
  templateUrl: './tropes.component.html',
  styleUrls: ['./tropes.component.scss']
})

export class TropesComponent implements OnInit {
	@Input() trope: FormGroup;

	
	poirotTropes = [
	{name:"poirotTriesToPreventMurder"  , checked:false, display:"Tries to prevent murder"},
	{name:"poirotTriesToPreventCrime"   , checked:false, display:"Tries to prevent other crimes"},
	{name:"poirotCommitsCrime"					, checked:false, display:"Commits a crime"},
	{name:"poirotCompulsiveSymmetry" 	  , checked:false, display:"Obsession with symmetry"},
	{name:"poirotIsReallyBelgian" 			, checked:false, display:"Not French, Belgian"},
	{name:"poirotSolvesColdCase" 			  , checked:false, display:"Solves a cold case"},
	{name:"poirotLenientJudgeAndJury" 	, checked:false, display:"Doesn't punish a guilty party"},
	{name:"poirotMatchmaker" 					  , checked:false, display:"Plays matchmaker"},
	{name:"poirotRetirement" 					  , checked:false, display:"Enjoys retirement"},
	{name:"poirotAvuncular" 						, checked:false, display:"Acts as avuncular to a younger lady"},
	{name:"poirotOnHoliday" 						, checked:false, display:"Is on holiday"},
	{name:"poirotSmitten"  						  , checked:false, display:"Is in love"},
	{name:"poirotDentist" 							, checked:false, display:"Goes to the dentist"}
	];

	hastingsTropes = [
	{name:"hastingsLadyPuzzlement"  		, checked:false, display:"Doesn't understand women"},
	{name:"hastingsSolvesCase" 				  , checked:false, display:"Solves the case"},
	{name:"hastingsSmitten" 						, checked:false, display:"Is in love"},
	{name:"hastingsTravel" 					  	, checked:false, display:"Travels abroad"},
	{name:"hastingsHobby" 							, checked:false, display:"Takes up a hobby"},
	{name:"hastingsGolf" 							  , checked:false, display:"Plays golf"},
	{name:"hastingsCar"  							  , checked:false, display:"Is a car enthusiast"},
	];

	lemonTropes = [
	{name:"msLemonOrderAndMethod" 			, checked:false, display:"Does detective work"},
	{name:"msLemonsFilingSystem" 			  , checked:false, display:"Uses her filing system"},
	{name:"msLemonSupernatural" 				, checked:false, display:"Is supernatural"},
	];

	otherTropes = [
	{name:"frenchVsEnglishCuisine"			, checked:false, display:"Episode features French vs. English cuisine"},
	{name:"diggingUpThePast" 					  , checked:false, display:"Setting is in an archaeological dig"},
	{name:"artImitatesArt"							, checked:false, display:"Episode involves a murder-mystery play or book"},
	{name:"hostIsMurdered" 						  , checked:false, display:"The host is murdered at or after their own event"},
	{name:"bridgeGame" 								  , checked:false, display:"Characters play the card game Bridge"},
	{name:"bonVoyage" 									, checked:false, display:"Crime scene is on a train, plane or boat"},
	{name:"perpTriesToOutmartPoirot" 	  , checked:false, display:"A criminal intentionally involves Poirot in the plot"},
	{name:"christmasSpecial"						, checked:false, display:"Christmas special"}
	];

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
  	this.trope = <FormGroup>this.controlContainer.control;
  }

}
