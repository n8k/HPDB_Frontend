import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'crime-search-component',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})

export class CrimeComponent implements OnInit {
	@Input() crime: FormGroup;

	crimesGroup = [
	{display:'Crime', 			 name:'criminalAct', placeholder:'Murder, Blackmail'},
	{display:'Perpetrator', name:'perpetrator', placeholder:'(Name)'},
	{display:'Victim',			 name:'victim', 		 placeholder:'(Name)'},
	{display:'Means', 			name:'means',  			placeholder:'Pistol, Poison, Knife'},
	{display:'Motive', 			name:'motive', 			placeholder:'Greed,Jealousy'},
	{display:'Opportunity', name:'opportunity', placeholder:'Posing as, Following'}
	];

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
  	this.crime = <FormGroup>this.controlContainer.control;
  }

}
