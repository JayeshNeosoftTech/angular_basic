import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  fnameval=''
  submit(loginform: any, firstname:any, lastname:any, username:any, passw:any){  
    console.log("loginform:",loginform);
    console.log(firstname.errors,firstname.errors?.['maxlength']);
    console.log(typeof(lastname.value));

    console.log('----------------', firstname.status=='VALID', lastname.status=='VALID', username.status=='VALID', passw.status=='VALID')
    if(firstname.status=='VALID' && lastname.status=='VALID' && username.status=='VALID' && passw.status=='VALID'){
      console.log("value:",firstname.value, lastname.value,this.typeOf(firstname.value), this.typeOf(lastname.value));
      if(this.typeOf(firstname.value) || this.typeOf(lastname.value)){
        alert("Don't put numbers as a first name and last name!!!");
      }
      else{
        alert('Form submitted...');
      }
      this.resetFormField(firstname, lastname, username, passw);
    }
    else{
      alert('Enter correct information!!!');
      this.resetFormField(firstname, lastname, username, passw);
    }
  }

  //Reseting all the input fields
  resetFormField(firstname:any,lastname:any, username:any, passw:any){
    firstname.reset();
    lastname.reset();
    username.reset();
    passw.reset();
  }

  typeOf(fnameval:any):boolean{
    var reval= false;
    var count=0;

    for(var i=0; i < fnameval.length; i++){
      for(var j=0; j < 10; j++){
        if(Number(fnameval.charAt(i))==j){
            count++;
        }
      }
      if(count>0){
          reval= true;
          //return reval;
      }
      else{
        reval= false;
        //return reval;
      }  
    }
    return reval;
  }
}
