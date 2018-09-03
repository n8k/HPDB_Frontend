import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tropes-search-component',
  templateUrl: './tropes.component.html',
  styleUrls: ['./tropes.component.scss']
})
export class TropesComponent implements OnInit {
	@Input() trope: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
