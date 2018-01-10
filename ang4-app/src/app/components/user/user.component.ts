import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean;

  constructor(private dataService: DataService) {
    console.log("constructor ran");
   }

  ngOnInit() {
    console.log("init ran");
    this.name = "John Doe";
    this.age = 30;
    this.email = "test@gmail.com"
    this.address = {
      street: "50 Main st",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = [ "Write code", "Watch Movies", "Listen to music"];
    this.hello = 1;

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
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

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
