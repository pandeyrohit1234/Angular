import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Item } from '../item';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addform : FormGroup;
  constructor(private fb :FormBuilder, private myservice: AppService, private router: Router) {
    this.addform = this.fb.group({
      title: ['', Validators.required],
      price: [[Validators.required, Validators.min(0)]],
      //quantity: [[Validators.required, Validators.min(0)]],
      color: ['',Validators.required],
      expirydate :['', Validators.required],
      inStock : [true, Validators.required]
    });
   }
 
  ngOnInit(): void {
  }
 
  submit() {
    let product: Item ={...this.addform.value};
    product.id =0;
    this.myservice.addProduct(product).subscribe();
    //this.router.navigate(['/home']);
  }
  // addTask() {
  //   let taskToAdd = {
  //     id : 99,
  //     name :this.addTask,
  //     isComplete : false
  //   }
  // }
}
