import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  date= new Date();
  sentence= 'Hii, Jayesh!!!';
  price= 1050;
  val= 19.1999;
  PerVal= 0.29874567;
  cel_val=0;
  JSON_Data= {id: 1, name: { username: 'user1' }};
}
