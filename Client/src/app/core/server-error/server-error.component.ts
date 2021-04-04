import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent implements OnInit {
  error: any;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.error =
      navigation &&
      navigation.extras &&
      navigation.extras.state &&
      navigation.extras.state.error;
  }

  ngOnInit(): void {}
}
