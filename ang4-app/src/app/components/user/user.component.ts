import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  address: address;
  hobbies: string[];
  hello: any;

  constructor() { }

  ngOnInit() {
    console.log("init ran");
    this.name = "John Doe";
    this.age = 30;
    this.address = {
      street: "50 Main st",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = [ "Write code", "Watch Movies", "Listen to music"];
    this.hello = 1;
  }

  onClick() {
    this.name = "Tapio Mattila";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }


}

interface address {
  street: string,
  city: string,
  state: string
}
