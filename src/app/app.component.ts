import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  name = 'Learning Management System';
  currentRoute: string | any;

  constructor(private router: Router){
    console.log(router.url);

    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
          .subscribe((event: { url: any; }) =>
           {
              this.currentRoute = event.url.substring(1);
              console.log(event);
           });
    }
}

