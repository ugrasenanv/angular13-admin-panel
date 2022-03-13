import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactMeComponent,
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
