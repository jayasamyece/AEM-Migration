import { Component, OnInit } from '@angular/core';
import { CreditCardsService } from 'src/app/services/credit-cards.service';

@Component({
  selector: 'app-feature-credit-card-section',
  templateUrl: './feature-credit-card-section.component.html',
  styleUrls: ['./feature-credit-card-section.component.css']
})
export class FeatureCreditCardSectionComponent implements OnInit {
  creditCards: any;
  constructor(private _creditCardService: CreditCardsService) {
    this._creditCardService.getCreditCards().subscribe(t=>{
      this.creditCards = t;
    });
   }

  ngOnInit(): void {
  }
}
