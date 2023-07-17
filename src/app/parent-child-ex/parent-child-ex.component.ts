import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-child-ex',
  templateUrl: './parent-child-ex.component.html',
  styleUrls: ['./parent-child-ex.component.css']
})
export class ParentChildExComponent {
  @Input() communicationName: string | undefined;

  username:string | undefined;
  password: string | undefined;

  @Output() uname= new EventEmitter<string> ();

  submit(){
    console.log(this.username, this.password);
    if(this.username!=undefined && this.password!=undefined){
      this.uname.emit(this.username);
    }
    else{
      alert("Username and Password required...");
    }
    
  }
}
