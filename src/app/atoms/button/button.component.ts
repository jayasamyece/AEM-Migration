import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text='';
  @Input() class='';
  @Input() imgText='';
  @Input() imgClass='';
  @Input() imgSrc='';
  @Input() imgAlt='';
  @Input() imgTitle=''

  constructor() { }

  ngOnInit(): void {
  }

}
