import { Component, ElementRef, EmbeddedViewRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  menu= [{name:'Home', index:1}, {name:'Examples', index:2}, {name:'Pipes', index:3}, {name:'CC Ex',index:4}, {name:'Forms', index:5}];
  indexVal=0;
  status= false;
  active_item:any;
  
  active_items=(<HTMLCollection>document.getElementsByClassName('menu-item'));
  ngOnInit(): void { 
    this.active_item= document.querySelector('.menu-item');
    console.log(this.active_item);
    console.log('Using html:',this.active_items);
  }
  activeClass_i="";
  clicked(Val:any, indexOfItem:any){
    let activeItem= document.querySelectorAll('.activeItem');
    for(let j=0; j < activeItem.length; j++){
      activeItem[j].classList.remove('active');
    }
    activeItem[indexOfItem].classList.add('active');
  }
}
