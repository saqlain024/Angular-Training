import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';   //we added this


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent,RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/img/home.png"
          alt="logo"
          aria-hidden="true"
          width="80px"
          height="63px"
        />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
       
      </section>
    </main>
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
