import { Component, Input } from "@angular/core";

@Component({
    selector:'app-hyperlink',
    template:`<a [class]="class" [href]="href" [innerHTML]="text" [target]="target"></a>`,
    styles:[`
    .promoBlockLink {
        color: #FFF;
        font-size: 12px;
        margin-left: 16px;
    }`]
})

export class HyperLinkComponent{
    @Input() text='sss';
    @Input() href='#';
    @Input() class='';
    @Input() target='_parent';
    constructor(){}
}