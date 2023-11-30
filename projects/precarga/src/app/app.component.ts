import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.configureNetworkStatusListener();
  }

  configureNetworkStatusListener() {
    const nav: any = navigator;

    if (nav.connection) {
      this.handleConnectionChange(nav.connection.downlink);
      // nav.connection.addEventListener('change', () => {
      // });
    }
  }

  handleConnectionChange(connectionSpeed: number) {
    const routerConfig = this.router.config.find(
      (route) => route.path === 'modulo-b'
    );

    console.log(connectionSpeed);

    if (routerConfig) {
      routerConfig.data = { preload: connectionSpeed >= 1 };
    }
  }
}
