import { Injectable } from '@angular/core';
import { taskList } from '../data/task-data';
import { Task } from '../data/task';
import { SharedTaskService } from './shared.service';

@Injectable()
export class GetAllTasksService {
  taskList: Task[] = taskList;
  constructor(private sharedTaskService: SharedTaskService) {}

  getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          res: this.sharedTaskService.taskItems
            ? this.sharedTaskService.taskItems
            : this.taskList,
        };
        resolve(data);
      }, 2000);
    });
  }
}
