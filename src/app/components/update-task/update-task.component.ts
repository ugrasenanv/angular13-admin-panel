import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetATaskService } from '../../task-services/get-atask.service';
import { SharedTaskService } from '../../task-services/shared.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
})
export class UpdateTaskComponent implements OnInit {
  updateTaskForm: FormGroup;
  task: any;
  constructor(
    private formBuilder: FormBuilder,
    // private toastr: ToastrManager,
    private getATaskService: GetATaskService,
    private sharedService: SharedTaskService
  ) {
    this.updateTaskForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      project: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  ngOnInit() {
    const promise = this.getATaskService.getTaskByGivenId(
      this.sharedService.getViewTaskId()
    );
    promise.then(
      (response) => {
        this.updateTaskForm.controls['id'].setValue(response['id']);
        this.updateTaskForm.controls['name'].setValue(response['name']);
        this.updateTaskForm.controls['project'].setValue(response['project']);
        this.updateTaskForm.controls['comments'].setValue(response['comments']);
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  updateTask() {
    console.log('update Task ' + JSON.stringify(this.updateTaskForm.value));
  }
}
