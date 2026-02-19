import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'; // old rxjs import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'migration demo';
  user: any = null;
  items = ['Angular', 'React', 'Vue'];

  ngOnInit() {
    setTimeout(function () {
      this.title = 'Updated Title'; // wrong "this" context
    }, 1000);
  }

  changeTitle() {
    this.title = "Changed!";
  }
}
