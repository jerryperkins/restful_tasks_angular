import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'app';
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.getTasks()
    .subscribe(data => {
      console.log('Here is the tasks data', data)
      this.title = data
    })
  }
}
