import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewallFriendsComponent } from './viewall-friends/viewall-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewallFriendsComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewallFriendsComponent,
    NavbarComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
