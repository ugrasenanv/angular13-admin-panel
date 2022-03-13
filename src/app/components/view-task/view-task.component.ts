import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllTasksService } from '../../task-services/get-all-task.service';
import { SharedTaskService } from '../../task-services/shared.service';
import { ModalComponent } from '../modal/modal.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task } from '../../data/task';
// import Validation from './utils/validation';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  taskList = [];
  constructor(
    private sharedService: SharedTaskService,
    private router: Router,
    private getAllTasks: GetAllTasksService
  ) {
    sharedService.setViewTaskId(null);
  }

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  ngOnInit() {
    const promise = this.getAllTasks.getAllTasks();
    promise.then(
      (response) => {
        this.taskList = response['res'];
        this.sharedService.taskItems = this.taskList;
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  updateTask(task) {
    console.log('update task ' + JSON.stringify(task));
  }

  deleteTask(id: any) {
    console.log(
      ' this.sharedService.taskItems===> ' + this.sharedService.taskItems
    );
    // this.sharedService.taskItems
    if (
      Array.isArray(this.sharedService.taskItems) &&
      this.sharedService.taskItems.length > 0
    ) {
      // if (
      //   this.sharedService.taskItems &&
      //   this.sharedService.taskItems.length > 0
      // ) {
      console.log('delete task ' + id);
      this.sharedService.taskItems.splice(
        this.sharedService.taskItems.indexOf(id),
        1
      );
      // const index = this.sharedService.taskItems.indexOf(id);
      // if (index > -1) {
      //   this.sharedService.taskItems.splice(index, 1);
      // }
    } else {
      console.log('delete else ' + id);
    }

    this.router.navigate(['/home']);
  }

  viewTask(id) {
    this.sharedService.setViewTaskId(id);
    this.modal.open(id);
    // this.router.navigate(['/update']);
  }
  isSettings = false;

  onSettingsOpen() {
    this.isSettings = !this.isSettings;
    console.log('should toggle settings->', this.isSettings);
  }

  onSettingsClose(event: boolean) {
    this.isSettings = event;
    console.log('Should return false when closed->', event);
  }

  openModal() {
    this.modal.open(false);
  }
}
