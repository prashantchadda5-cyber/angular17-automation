import { Component } from '@angular/core';
import { of } from 'rxjs';

import { map } from 'rxjs/operators';
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

  ngOnInit() {
    const numbers$ = of(1, 2, 3, 4);

   numbers$
  .pipe(
    map(value => value * 2)
  )
  .subscribe(result => {
    console.log(result);
  });
  }

  submitForm() {
    console.log(this.username);
  }

  trackById(index: number, user: any) {
    return user.id;
  }
}
