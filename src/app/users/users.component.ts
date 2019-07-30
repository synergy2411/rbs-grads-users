import { Component } from '@angular/core';
import { IUser} from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  user : IUser = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1964"),
    income : 50000,
    company : "Microsoft",
    isWorking : true,
    image : "assets/images/bill.jpg",
    vote : 120
  }

  moreInfo(u : IUser){
    alert(`Mr. ${u.firstName} is working with ${u.company}!`);
  }
}
