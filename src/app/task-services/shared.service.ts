import { Injectable } from '@angular/core';
import { Task } from '../data/task';
@Injectable()
export class SharedTaskService {
  taskItems: Task[];
  viewTaskId: number;
  constructor() {}

  setViewTaskId(id) {
    this.viewTaskId = id;
  }

  getViewTaskId() {
    return this.viewTaskId;
  }
}
