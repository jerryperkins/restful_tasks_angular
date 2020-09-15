import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = []
  single_task = {}
  all_tasks_exist: boolean
  single_task_exist: boolean
  new_task: any
  task_to_edit = {}
  edit_task_exist: boolean


  

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.all_tasks_exist = false
    this.single_task_exist = false
    this.new_task = {title: '', description: ''}
    this.edit_task_exist = false
  }

  on_submit(){
    this._httpService.add_task(this.new_task)
    .subscribe(data => {
      console.log('Here is the new task data', data)
      this.new_task = { title: "", description: "" }
    })
  }

  on_edit_task_submit(id){
    console.log('Here is edit task', this.task_to_edit)
    this._httpService.update_task(this.task_to_edit, id)
    .subscribe(data =>{
      console.log("Here is the updated task info", data)
      this.display_all_tasks()
    })
  }

  show_edit_page(id){
    this.edit_task_exist = true
    this._httpService.get_single_task(id)
    .subscribe(data => {
      console.log('Here is the task to edit', data)
      this.task_to_edit = data
    })
  }

  delete_task(id){
    console.log("here is the task ID to delete", id)
    this._httpService.delete_task(id)
    .subscribe(data => {
      console.log("Task being deleted")
      this.display_all_tasks()
    })
  }

  display_all_tasks() {
    this.all_tasks_exist = true
    this._httpService.getTasks()
    .subscribe(data => {
      console.log('Here is the tasks data', data)
      this.title[0] = data
    })
  }

  display_task(id) {
    this.single_task_exist = true
    this._httpService.get_single_task(id)
    .subscribe(data => {
      console.log('Here is the single task', data)
      this.single_task = data
    })
  } 

  onButtonClickParam(str: string): void { 
    console.log(`Click event is working with num param: ${str}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    this._httpService.postToServer({title: str})
    .subscribe(data => console.log("Got our data!", data));
  }
}
