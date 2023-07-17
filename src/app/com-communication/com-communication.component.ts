import { Component } from '@angular/core';

@Component({
  selector: 'app-com-communication',
  templateUrl: './com-communication.component.html',
  styleUrls: ['./com-communication.component.css']
})
export class ComCommunicationComponent {
  comIndex= 0;
  communicationName= "";
  
  uname(username:string){
    console.log(username);
    //alert("Namaskar "+username+" !!!!");
  }
}
