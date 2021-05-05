import { Item } from '../item';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-listproductwithoutasync',
  templateUrl: './listproductwithoutasync.component.html',
  styleUrls: ['./listproductwithoutasync.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})



  export class ListproductwithoutasyncComponent implements OnInit{
  
    @Input() product:Observable<Item[]>;
    products : Item[] = [];
    productsubscription : Subscription;
   
    constructor(private cd: ChangeDetectorRef)
    {
      this.productsubscription = new Subscription();
      this.product = new Observable<Item[]>();
    }
   
    ngOnInit()
    {
      this.productsubscription = this.product.subscribe(data=>{
        this.products =data
        this.cd.markForCheck();});
    }
   
    
  }


  
