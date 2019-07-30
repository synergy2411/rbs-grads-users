import { Component,
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('user') user : IUser;

  ngOnChanges(){console.log("ngOnChanges")}
  ngOnInit(){console.log("ngOnInit")}
  ngDoCheck(){console.log("ngDoCheck")}
  ngAfterContentInit(){console.log("ngAfterContentInit")}
  ngAfterContentChecked(){console.log("ngAfterContentChecked")}
  ngAfterViewInit(){console.log("ngAfterViewInit")}
  ngAfterViewChecked(){console.log("ngAfterViewChecked")}
  ngOnDestroy(){console.log("ngOnDestroy")}
}
