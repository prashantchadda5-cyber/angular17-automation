import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Angular16 Demo';
  username = '';
  isLoggedIn = false;

  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  submitForm() {
    console.log(this.username);
  }

  trackById(index: number, user: any) {
    return user.id;
  }
}
