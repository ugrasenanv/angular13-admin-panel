import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
// import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { ɵa as NgxAsideComponent } from 'ngx-aside';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent {
  isOpen = false;

  @ViewChild('taskModal') taskModal: NgxAsideComponent;

  @Input('open') set open(value: boolean) {
    this.isOpen = value;
    if (this.isOpen) {
      this.taskModal.show();
    }
  }
  get open() {
    return this.isOpen;
  }

  @Output() close = new EventEmitter<boolean>();

  name = 'Angular';

  onClose() {
    this.isOpen = !this.isOpen;
    this.taskModal.hide();
    this.close.emit(this.isOpen);
  }
}
