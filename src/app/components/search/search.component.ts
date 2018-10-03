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
				'tropes':[],  		
				'director':''
				'writer':''
			})

}

	ngOnInit() {
	}

	onSubmit() {
	}

	}

