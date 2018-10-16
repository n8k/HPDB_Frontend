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
		{display:'None', value:''},
	  {display:'Andrew Grieve', value:'Andrew Grieve'},
	  {display:'Andrew Piddington', value:'Andrew Piddington'},
	  {display:'Andy Wilson', value:'Andy Wilson'},
	  {display:'Ashley Pearce', value:'Ashley Pearce'},
	  {display:'Brian Farnham', value:'Brian Farnham'},
	  {display:'Charles Palmer', value:'Charles Palmer'},
	  {display:'Dan Reed', value:'Dan Reed'},
	  {display:'David Moore', value:'David Moore'},
	  {display:'Edward Bennett', value:'Edward Bennett'},
	  {display:'Hettie Macdonald', value:'Hettie Macdonald'},
	  {display:'James Kent', value:'James Kent'},
	  {display:'John Bruce', value:'John Bruce'},
	  {display:'John Strickland', value:'John Strickland'},
	  {display:'Ken Grieve', value:'Ken Grieve'},
	  {display:'Maurice Phillips', value:'Maurice Phillips'},
	  {display:'Paul Unwin', value:'Paul Unwin'},
	  {display:'Peter Barber Fleming', value:'Peter Barber Fleming'},
	  {display:'Peter Lydon', value:'Peter Lydon'},
	  {display:'Phillip Martin', value:'Phillip Martin'},
	  {display:'Renny Rye', value:'Renny Rye'},
	  {display:'Richard Spence', value:'Richard Spence'},
	  {display:'Ross Devenish', value:'Ross Devenish'},
	  {display:'Sarah Harding', value:'Sarah Harding'},
	  {display:'Simon Langton', value:'Simon Langton'},
	  {display:'Stephen Whittaker', value:'Stephen Whittaker'},
	  {display:'Tom Clegg', value:'Tom Clegg'},
	  {display:'Tom Vaughan', value:'Tom Vaughan'}
	];

	constructor(private controlContainer: ControlContainer) { }

	ngOnInit() {
		this.director = <FormGroup>this.controlContainer.control;
	}

}