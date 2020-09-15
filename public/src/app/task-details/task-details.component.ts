import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() single_task: any

  constructor() { }

  ngOnInit() {
    console.log('Here is display task', this.single_task)
  }

}
