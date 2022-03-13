import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SharedTaskService } from '../task-services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class ViewTaskRouteGuardService {
  constructor(private sharedService: SharedTaskService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.sharedService.getViewTaskId()) {
      return true;
    } else {
      return false;
    }
  }
}
