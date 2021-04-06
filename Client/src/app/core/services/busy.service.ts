import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyReauestCount = 0;
  constructor(private spinnerServices: NgxSpinnerService) {}

  busy() {
    this.busyReauestCount++;
    this.spinnerServices.show(undefined, {
      type: 'timer',
      bdColor: 'rgb(255,255,255,0.7)',
      color: '#333333',
    });
  }

  idle() {
    this.busyReauestCount--;
    if (this.busyReauestCount <= 0) {
      this.busyReauestCount = 0;
      this.spinnerServices.hide();
    }
  }
}
