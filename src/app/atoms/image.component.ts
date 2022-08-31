import { Component, Input } from "@angular/core";

@Component({
    selector:'app-image',
    template:`<img [class]="class" [src]="src" [alt]="alt" [title]="title">`
})

export class ImageComponent{
    @Input() text='';
    @Input() class='';
    @Input() src='';
    @Input() alt='';
    @Input() title=''
    constructor(){}
}