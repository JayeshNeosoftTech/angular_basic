import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  title= 'Examples'
  name = 'jayesh'
  isDisabled = true
  productName = ''

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July']
  isAvailable = false;
  custom_placeholder= 'Enter your name....'

  dates = ['01', '02', '03']

  handleMe(){
    alert('Hello')
  }



  application = "Angular Training";
  age = 25;
  newClass = 'text-danger';
  hasError = false;
  isSpecial = true;
  messageClasses = {
    'text-primary': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  highlightColor = 'orange';
  titleStyles = {
    backgroundColor: 'grey',
    color: 'blue',
    fontStyle: 'italic'
  };

  typeValue = '';
  mydate:any;
  constructor() { }

  ngOnInit(): void { }

  myClickFunction(event:any) {
    alert('Button is clicked');
    console.log('This is event' + event);
  }

  updateValue(){
    console.log(this.typeValue);
  }

  monthVal="";
  selectVal="";
  selectDate="";
  submitBtn="Submit";
  count=0;

  /* student details */
  sDetails= [
    {rNo: '01', name:'Jayesh', className:'A'},
    {rNo: '02', name:'Mukesh', className:'A'},
    {rNo: '03', name:'Vipin', className:'A+'},
    {rNo: '04', name:'Sai', className:'A'},
    {rNo: '05', name:'Swammy', className:'A'},
    {rNo: '06', name:'Akash', className:'A'},
    {rNo: '07', name:'Jitendra', className:'A'},
    {rNo: '08', name:'Rohan', className:'A'},
    {rNo: '09', name:'Ankit', className:'A'},
    {rNo: '10', name:'Mandar', className:'A'},
    {rNo: '11', name:'Siddhesh', className:'A'},
    {rNo: '12', name:'Amar', className:'A'},
    {rNo: '13', name:'Viki', className:'A'},
    {rNo: '14', name:'Pradeep', className:'A'},
    {rNo: '15', name:'Akshay', className:'A'}
  ];

  
}