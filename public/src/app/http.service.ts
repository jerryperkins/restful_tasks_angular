import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.get_single_task()
  }

  getTasks(){
    return this._http.get('/task')
  }

  get_single_task(){
    let temp_observable = this._http.get('/task/:id')
    temp_observable.subscribe(data => {
      console.log('Here is a single task', data)
    })
  }
}
