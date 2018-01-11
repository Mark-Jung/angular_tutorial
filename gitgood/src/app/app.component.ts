import { Component } from '@angular/core';
import { GitIdInfo } from './github-id';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My bois';
  ghId = '';
  ghIds : GitIdInfo[] = [];
  constructor() { }
  addGhId(toadd:string) {
    if(toadd !== ''){
      this.ghIds.push({login:toadd, favorite:false});
      this.ghId = '';
    }
  }

}
