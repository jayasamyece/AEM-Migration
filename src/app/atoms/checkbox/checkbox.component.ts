import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() name='checkbox';
  @Input() id='checkbox';
  @Input() label='checkbox';
  @Input() displayBefore=false;
  constructor() { }

  ngOnInit(): void {
  }

}
