import { Component, OnInit 			} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import service goes here

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	basicSearchForm: FormGroup;
	crimeSearchForm: FormGroup;
	tropeSearchForm: FormGroup;
	directorSearchForm: FormGroup;
	writerSearchForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  	this.initializeSearchForms();
  }

  initializeSearchForms() {

  	this.basicSearchForm = this.fb.group({
  		seasonNum:'',
  		episodeNum:'',
  		title:'',
  		mood:'',
  		mainCharacters:[]
  	});

  	this.crimeSearchForm = this.fb.group({
  		criminalAct:'',
  		means:'',
  		motive:'',
  		opportunity:'',
  		perpetrator:'',
  		victim:''
  	});

  	this.tropeSearchForm = this.fb.group({
  		tropes:[],  		
  	});

  	this.directorSearchForm = this.fb.group({
  		director:''
  	});

  	this.writerSearchForm = this.fb.group({
  		writer:''
  	});
  }

}
