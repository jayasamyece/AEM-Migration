import { Component, Input } from "@angular/core";

@Component({
    selector:'app-hyperlink',
    template:`<a [class]="class" [href]="href" [innerHTML]="text" [target]="target"></a>`,
    styles:[]
})

export class HyperLinkComponent{
    @Input() text='sss';
    @Input() href='#';
    @Input() class='';
    @Input() target='_parent';
    constructor(){}
}