import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-credit-card',
  templateUrl: './feature-credit-card.component.html',
  styleUrls: ['./feature-credit-card.component.css']
})
export class FeatureCreditCardComponent implements OnInit {

  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
  }

}
