import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { NgxAsideModule } from 'ngx-aside';
import { GetAllTasksService } from './task-services/get-all-task.service';
import { GetATaskService } from './task-services/get-atask.service';
import { SharedTaskService } from './task-services/shared.service';
import { ModalComponent } from './components/modal/modal.component';
import { SaveTaskService } from './task-services/save-task.service';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { IframeComponent } from './components/contact-me/i-frame.component';

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxAsideModule,
  ],
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ViewTaskComponent,
    ModalComponent,
    ContactMeComponent,
    IframeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    GetAllTasksService,
    GetAllTasksService,
    SharedTaskService,
    GetATaskService,
    SharedTaskService,
    GetATaskService,
    SaveTaskService,
  ],
})
export class AppModule {}
