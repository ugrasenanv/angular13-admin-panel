import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GetATaskService } from '../../task-services/get-atask.service';
import { SaveTaskService } from '../../task-services/save-task.service';
import { SharedTaskService } from '../../task-services/shared.service';
import Validation from '../utils/validation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  updateTaskForm: FormGroup;
  task: any;
  createOrEdit: any;
  constructor(
    private formBuilder: FormBuilder,
    private getATaskService: GetATaskService,
    private saveTaskService: SaveTaskService,
    private sharedService: SharedTaskService
  ) {
    this.updateTaskForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      project: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('=====ngOnInitngOnInit==========>');
    this.initForm();
    this.createOrEdit ? this.initEdit() : '';
  }

  initForm() {
    this.form = this.formBuilder.group({
      project: ['', Validators.required],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      comments: [''],
    });
  }

  initEdit() {
    const promise = this.getATaskService.getTaskByGivenId(
      this.sharedService.getViewTaskId()
    );
    promise.then(
      (response) => {
        // this.form.controls['id'].setValue(response['id']);
        this.form.controls['name'].setValue(response['name']);
        this.form.controls['project'].setValue(response['project']);
        this.form.controls['comments'].setValue(response['comments']);
      },
      (error) => {
        console.log('error ' + error);
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.saveTaskService.SaveTask(this.form.value);
    console.log('====?', JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  @ViewChild('myModal', { static: false }) modal: ElementRef;

  open(param) {
    this.onReset();
    this.createOrEdit = param;
    console.log('===========open param========>', param);
    this.createOrEdit ? this.initEdit() : '';
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  updateTask() {
    console.log('update Task ' + JSON.stringify(this.form.value));
  }
}
