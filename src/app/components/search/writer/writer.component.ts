import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'writer-search-component',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {
	@Input() writer: FormGroup;

	writers = [
	{value:'None'},
	{value:'Andrew Marshall'},
	{value:'Anthony Horowitz'},
	{value:'Bill Craig'},
	{value:'Clive Exton'},
	{value:'David Pirie'},
	{value:'David Reid'},
	{value:'David Renwick'}
	{value:'Douglas Watkinson'},
	{value:'Guy Andrews'},
	{value:'Kevin Elyot'},
	{value:'Mark Gatiss'},
	{value:'Michael Baker'},
	{value:'Nick Dear'},
	{value:'Peter Flannery'},
	{value:'Philomena McDonagh'},
	{value:'Rod Beacham'},
	{value:'Russell Murray'},
	{value:'Stephen Wakelam'},
	{value:'Stewart Harcourt'},
	{value:'TR Bowen'},
	{value:'William Humble'}
	];

	constructor(private controlContainer: ControlContainer) { }

	ngOnInit() {
		this.writer = <FormGroup>this.controlContainer.control;
	}

}