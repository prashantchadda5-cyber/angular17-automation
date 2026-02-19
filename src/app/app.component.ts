import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 123; // wrong type
  username: string;
  isLoggedIn: boolean = false;

  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  users$: Observable<number[]>;

  ngOnInit() {
    this.users$ = of([1,2,3]).pipe(
      map(value => {
        return value.name; // invalid property
      })
    );

    this.loadData();
  }

  loadData() {
    setTimeout(function () {
      this.isLoggedIn = "true"; // wrong context + type
    }, 1000);
  }

  submitForm() {
    console.log(this.username.toFixed(2)); // string misuse
  }
}
