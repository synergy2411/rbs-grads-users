import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{

  @Input('xyz')
  user : IUser;

  @Output('myevent')
  userEvent = new EventEmitter<IUser>();

  onClicked(user : IUser){
    this.userEvent.emit(user)
  }


}
