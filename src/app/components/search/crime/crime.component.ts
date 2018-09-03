import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'crime-search-component',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent implements OnInit {
	@Input() crime: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
