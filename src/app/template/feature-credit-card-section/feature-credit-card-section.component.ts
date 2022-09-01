import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreditCardsService } from 'src/app/services/credit-cards.service';

@Component({
  selector: 'app-feature-credit-card-section',
  templateUrl: './feature-credit-card-section.component.html',
  styleUrls: ['./feature-credit-card-section.component.css']
})
export class FeatureCreditCardSectionComponent implements OnInit, OnChanges {
  creditCards: any;
  name='';
  cardContent = '';
  constructor(private _creditCardService: CreditCardsService) {
    this._creditCardService.getCreditCards().subscribe(t=>{
      this.creditCards = t;
      if(this.creditCards){
        this.name = this.creditCards[":items"]["root"][":items"]["container"][":items"]["container"][":items"]["contentfragment"]["elements"]["title"]["value"];
        this.cardContent = this.creditCards[":items"]["root"][":items"]["container"][":items"]["container"][":items"]["contentfragment"]["elements"]["items"]["value"];
      }
    });
   }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.creditCards){
      this.name = this.creditCards.items.root.items.items.container.items.contentFragment.elements.title.value;
    }
  }
}
