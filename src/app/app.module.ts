import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewallFriendsComponent } from './viewall-friends/viewall-friends.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"/view",
    component:ViewallFriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewallFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
