import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { taskList } from '../data/task-data';
import { SharedTaskService } from './shared.service';
// import { SharedTaskService } from '../data/task';

@Injectable()
export class SaveTaskService {
  // : Task;
  task;
  _id;
  taskList = taskList;
  dto: { comments: string; name: string; project: string; _id: string };
  // dto: Task[];
  constructor(
    private sharedTaskService: SharedTaskService,
    private router: Router
  ) {}

  SaveTask(item) {
    this._id = this.taskList.length + 1;

    this.dto = {
      comments: item.comments,
      name: item.name,
      project: item.project,
      _id: (this.taskList.length + 1).toString(),
    };

    this.taskList.unshift(this.dto);
    this.sharedTaskService.taskItems = this.taskList;
    console.log('======this.this._id============>', this.taskList);
    this.router.navigate(['/home']);
    // this.persons.unshift(this.userForm.value);

    // this.userForm.value.id= this.persons.length + 1;
    // this.persons.unshift(this.userForm.value);
    // this.task = this.taskList.find((cus) => cus._id === id);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.task);
    //   }, 2000);
    // });
  }
}
