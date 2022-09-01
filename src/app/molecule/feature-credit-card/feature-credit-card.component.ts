import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreditCardsService } from 'src/app/services/credit-cards.service';

@Component({
  selector: 'app-feature-credit-card',
  templateUrl: './feature-credit-card.component.html',
  styleUrls: ['./feature-credit-card.component.css']
})
export class FeatureCreditCardComponent implements OnInit, OnChanges {

  @Input() content: any;

  title = '';
  description = '';
  imageURL = '';
  buttonLinks: any;
  showInNewTab: any;
  linkTitle = '';
  linkURL = '';
  buttonObj=[];
  constructor(private _creditCardService: CreditCardsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content) {
      this._creditCardService.getCreditCardContent(this.content + '.json').subscribe(t => {
        this.title = t["properties"]["elements"]["title"]["value"];
        this.description = t["properties"]["elements"]["description"]["value"];
        this.imageURL = 'http://localhost:4502' + t["properties"]["elements"]["url"]["value"];
        this.buttonLinks = t["properties"]["elements"]["links"]["value"];
        if (this.buttonLinks) {
          this.buttonLinks.forEach((q: any, index: number) => {
            this._creditCardService.getCreditCardContent(q + '.json').subscribe(p => {
              this.buttonLinks[index] = {
                showInNewTab: p["properties"]["elements"]["showInNewTab"]["value"],
                linkTitle: p["properties"]["elements"]["title"]["value"], 
                linkURL: p["properties"]["elements"]["url"]["value"]
              }
              console.log('this.buttonLinks', this.buttonLinks);        
            });
          });
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
