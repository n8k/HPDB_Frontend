import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'basic-search-component',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})


export class BasicComponent implements OnInit {
	@Input() basic: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
