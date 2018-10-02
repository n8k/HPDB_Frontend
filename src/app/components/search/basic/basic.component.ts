import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'basic-search-component',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})


export class BasicComponent implements OnInit {
	@Input() basic: FormGroup;

	titleParams = [
	{display:'Season', 				type:'text', name:"season",  placeholder:'(1-13)'},
	{display:'Episode', 			type:'text', name:"episode", placeholder:'(varies)'},
	{display:'Episode Title', type:'text', name:"title",   placeholder:'Adventure of.../ Murder on...'}
	];

	moods = [
	{value: ''				, display:'None'},
	{value: 'light'		, display:'Light'},
	{value: 'serious'	, display:'Serious'},
	{value: 'dark'		, display:'Dark'}
	];

	mainCharacters = [
		{ value: 'hastings', name: 'Captain Hastings', checked:false},
		{ value: 'lemon' , name: 'Miss Lemon', checked:false},
		{ value: 'oliver' , name: 'Miss Oliver', checked:false},
		{ value: 'japp', name: 'Inspector Japp', checked:false}
	];

	get selectedOptions() {
	  return this.mainCharacters
	            .filter(opt => opt.checked)
	            .map(opt => opt.value)
	}

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
  	this.basic = <FormGroup>this.controlContainer.control;
  }

}