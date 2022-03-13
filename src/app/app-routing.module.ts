import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { ViewTaskRouteGuardService } from './route-guards/view-task-route-guard';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTaskComponent,
  },
  {
    path: 'update',
    component: UpdateTaskComponent,
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
