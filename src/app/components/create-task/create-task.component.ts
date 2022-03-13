import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedTaskService } from '../../task-services/shared.service';
import { SaveTaskService } from '../../task-services/save-task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent implements OnInit {
  createTaskForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedTaskService,
    private saveTaskService: SaveTaskService
  ) {
    sharedService.setViewTaskId(0);
    this.createTaskForm = formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      project: ['', Validators.required],
      Comments: ['', Validators.required],
    });
  }

  ngOnInit() {}

  createTask() {
    console.log('create button clicked');
    console.log('form value ' + JSON.stringify(this.createTaskForm.value));

    if (this.createTaskForm.valid) {
      // this.toastr.successToastr("This is a vaild form.", "Success!");
    } else {
      // this.toastr.warningToastr("This is not a valid form.", "Alert!");
    }
  }

  @ViewChild('myModal', { static: false }) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
