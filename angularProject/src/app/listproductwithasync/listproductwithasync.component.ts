import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../item';



@Component({
  selector: 'app-listproductwithasync',
  templateUrl: './listproductwithasync.component.html',
  styleUrls: ['./listproductwithasync.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListproductwithasyncComponent implements OnInit {
@Input() items$:Observable<Item[]>;


productsubscription : Subscription;
   
  constructor(private pq: ChangeDetectorRef) {
    this.items$=new Observable<Item[]>();
   }

  ngOnInit(): void {
    
  }

}
