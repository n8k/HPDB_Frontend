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
	{display:'None', value:''},
	{display:'Andrew Marshall', value:'Andrew Marshall'},
	{display:'Anthony Horowitz', value:'Anthony Horowitz'},
	{display:'Bill Craig', value:'Bill Craig'},
	{display:'Clive Exton', value:'Clive Exton'},
	{display:'David Pirie', value:'David Pirie'},
	{display:'David Reid', value:'David Reid'},
	{display:'David Renwick', value:'David Renwick'}
	{display:'Douglas Watkinson', value:'Douglas Watkinson'},
	{display:'Guy Andrews', value:'Guy Andrews'},
	{display:'Kevin Elyot', value:'Kevin Elyot'},
	{display:'Mark Gatiss', value:'Mark Gatiss'},
	{display:'Michael Baker', value:'Michael Baker'},
	{display:'Nick Dear', value:'Nick Dear'},
	{display:'Peter Flannery', value:'Peter Flannery'},
	{display:'Philomena McDonagh', value:'Philomena McDonagh'},
	{display:'Rod Beacham', value:'Rod Beacham'},
	{display:'Russell Murray', value:'Russell Murray'},
	{display:'Stephen Wakelam', value:'Stephen Wakelam'},
	{display:'Stewart Harcourt', value:'Stewart Harcourt'},
	{display:'TR Bowen', value:'TR Bowen'},
	{display:'William Humble', value:'William Humble'}
	];

	constructor(private controlContainer: ControlContainer) { }

	ngOnInit() {
		this.writer = <FormGroup>this.controlContainer.control;
	}

}