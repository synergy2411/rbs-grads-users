import { Component, OnInit } from '@angular/core';
import { IUser} from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users : IUser[];

  constructor(private dataService : DataService){}

  ngOnInit(){
    // this.users =  this.dataService.getData();
    this.dataService.getRemoteData()
      .subscribe(response => this.users = response['userdata']);
  }

  moreInfo(u : IUser){
    alert(`Mr. ${u.firstName} is working with ${u.company}!`);
  }
}
