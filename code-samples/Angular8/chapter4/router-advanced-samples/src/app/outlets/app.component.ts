import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['']">Home</a>&nbsp;
        <a [routerLink]="['', {outlets: { aux: 'chat'}}]">Open Chat</a>&nbsp;
        <a [routerLink]="[{outlets: {aux: null}}]">Close Chat</a>
        <br/>
        <router-outlet></router-outlet>
        <router-outlet name="aux"></router-outlet>
    `
})
export class AppComponent {}
