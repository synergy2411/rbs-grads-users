import { Component } from '@angular/core';
import { IUser} from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users : IUser[] = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1964"),
    income : 50000,
    company : "Microsoft",
    isWorking : true,
    image : "assets/images/bill.jpg",
    vote : 120
  },{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Aug 21, 1964"),
    income : 0,
    company : "Apple",
    isWorking : false,
    image : "assets/images/steve.png",
    vote : 190
  },{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Jan 21, 1964"),
    income : 30000,
    company : "World Wide Web",
    isWorking : true,
    image : "assets/images/tim.jpg",
    vote : 110
  }]

  moreInfo(u : IUser){
    alert(`Mr. ${u.firstName} is working with ${u.company}!`);
  }
}
