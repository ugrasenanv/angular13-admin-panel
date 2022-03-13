import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { ViewTaskRouteGuardService } from './route-guards/view-task-route-guard';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactMeComponent,
    canActivate: [ViewTaskRouteGuardService],
  },
  {
    path: 'home',
    component: ViewTaskComponent,
  },
  {
    path: '',
    component: ViewTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
