import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'director-search-component',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
	@Input() director: FormGroup;

	directors = [
		{value:'None'},
	  {value:'Andrew Grieve'},
	  {value:'Andrew Piddington'},
	  {value:'Andy Wilson'},
	  {value:'Ashley Pearce'},
	  {value:'Brian Farnham'},
	  {value:'Charles Palmer'},
	  {value:'Dan Reed'},
	  {value:'David Moore'},
	  {value:'Edward Bennett'},
	  {value:'Hettie Macdonald'},
	  {value:'James Kent'},
	  {value:'John Bruce'},
	  {value:'John Strickland'},
	  {value:'Ken Grieve'},
	  {value:'Maurice Phillips'},
	  {value:'Paul Unwin'},
	  {value:'Peter Barber Fleming'},
	  {value:'Peter Lydon'},
	  {value:'Phillip Martin'},
	  {value:'Renny Rye'},
	  {value:'Richard Spence'},
	  {value:'Ross Devenish'},
	  {value:'Sarah Harding'},
	  {value:'Simon Langton'},
	  {value:'Stephen Whittaker'},
	  {value:'Tom Clegg'},
	  {value:'Tom Vaughan'}
	];

	constructor(private controlContainer: ControlContainer) { }

	ngOnInit() {
		this.director = <FormGroup>this.controlContainer.control;
	}

}