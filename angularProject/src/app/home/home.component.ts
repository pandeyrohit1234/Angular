import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Item } from '../item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Items:Observable<Item[]>;
  ItemsSubscription:Subscription;

  constructor(private appservice:AppService) { 
    this.ItemsSubscription=new Subscription();
    this.Items=new Observable<Item[]>();
  }

  ngOnInit(): void {
    this.Items=this.appservice.getItems();
  }

}
