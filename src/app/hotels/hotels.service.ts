import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) {
   
   }


   getItemsList(): Observable<any>{
    return this.http.get<any>('../../assets/data.json').pipe(map(data => {
			 				return data;
		}));
  }

   getFieldDetails(fieldid): Observable<any>{
    return this.http.get<any>('../../assets/data.json').pipe(map(data => {
			 				return data[fieldid];
		}));
  }
 
}
