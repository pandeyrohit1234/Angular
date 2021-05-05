import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from './item';
import{tap,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient ) 
  {}
  private myerrorhandler(err:any)
{
  console.log(err);
  return throwError(err);
}
   getItems():  Observable<Item[]>{
     const apiurl=environment.apibaseurl + "items";
     const headers={'content-type':'application/json'};
     return this.http.get<Item[]>(
       apiurl,{'headers':headers } 
     ).pipe(
       tap(data=>{console.log(data)}),
       catchError(error=>{
         return throwError(error)
       })
     );
 }

//  addTodoTask(task:Item):  Observable<Item>{

//   const apiurl=environment.apibaseurl + "items";
//   const headers={'content-type':'application/json'};
//   Object.defineProperty(task,'id',{'enumerable':false});
//   const taskDto=JSON.stringify(task);
//   console.log(taskDto);
//   return this.http.post<Item>(apiurl,taskDto,{headers:headers }).pipe(
//     tap(task: any)=>{console.log(task)
//     }),
//     catchError(this.handleError)
    
//   );
// }

// getProduct(id :number): Observable<Item>{
//     const apiurl=environment.apibaseurl+"items";
//     const headers={'content-type':'application/json'};
//     return this.http.get<Item>(apiurl,{'headers':headers }).pipe(
//       catchError(error=>{
//         this.myerrorhandler(error))
      
//     );
// }

addProduct(product :Item) : Observable<Item>{
  const apiurl = environment.apibaseurl + "items";
  const headers = {'content-type' : 'application/json'};
  Object.defineProperty(product,'id',{'enumerable':false});
  const taskDto = JSON.stringify(product);
  return this.http.post<Item>(apiurl, taskDto, {headers: headers})
  .pipe(   
    catchError(error => this.myerrorhandler(error))
  );
}
}

