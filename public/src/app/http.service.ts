import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    
  }

  getTasks(){
    return this._http.get('/task')
  }

  get_single_task(id){
    return this._http.get(`/task/${id}`)
    
  }

  postToServer(str){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/task', str);  
  }

  add_task(new_task){
    return this._http.post('/task', new_task)
  }

  update_task(task_to_edit, id){
    return this._http.put(`/task/${id}`, task_to_edit)
  }

  delete_task(id){
    return this._http.delete(`/task/${id}`)
  }
}
