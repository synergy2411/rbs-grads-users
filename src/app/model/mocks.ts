import { IUser } from './user';

export const USER_DATA : IUser[]  = [{
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
