import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HyperLinkComponent } from './atoms/hyperlink.component';
import { ImageComponent } from './atoms/image.component';
import { PromoBlockListComponent } from './molecule/promo-block-list/promo-block-list.component';
import { ButtonComponent } from './atoms/button/button.component';
import { MainHeaderComponent } from './molecule/main-header/main-header.component';
import { PageHeaderComponent } from './template/page-header/page-header.component';
import { NavHeaderContainerComponent } from './molecule/nav-header-container/nav-header-container.component';
import { HeaderComponent } from './atoms/header/header.component';
import { CreditPageComponent } from './page/credit-page/credit-page.component';
import { CheckboxComponent } from './atoms/checkbox/checkbox.component';
import { FeatureCreditCardComponent } from './molecule/feature-credit-card/feature-credit-card.component';
import { FeatureCreditCardSectionComponent } from './template/feature-credit-card-section/feature-credit-card-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HyperLinkComponent,
    PromoBlockListComponent,
    ImageComponent,
    ButtonComponent,
    MainHeaderComponent,
    PageHeaderComponent,
    NavHeaderContainerComponent,
    HeaderComponent,
    CreditPageComponent,
    CheckboxComponent,
    FeatureCreditCardComponent,
    FeatureCreditCardSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
