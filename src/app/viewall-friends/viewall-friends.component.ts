import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-friends',
  templateUrl: './viewall-friends.component.html',
  styleUrls: ['./viewall-friends.component.css']
})
export class ViewallFriendsComponent {
  constructor(private api:ApiService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[] 
}
