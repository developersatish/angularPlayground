import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

interface NavRoute {
  Name: string;
  Url: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public routes: NavRoute[] = [
    {
      Name: 'Home',
      Url: '/'
    },
    {
      Name: 'Dashboard',
      Url: '/dashboard'
    },
    {
      Name: 'Form',
      Url: '/login'
    },
    {
      Name: 'Angular Cheat Seat',
      Url: '/angular-cheat-sheet'
    },
    {
      Name:'Flex Layout',
      Url:'/flex'
    },
    {
      Name:'Flex full demo',
      Url:'/flex/full-demo'
    },
    {
      Name:'Flex layout',
      Url:'/flex/layout-demo'
    },
    {
      Name:'scroll Bar',
      Url:'/scroll-bar'
    },
    {
      Name:'Entity CURD- ngrx',
      Url:'/entity'
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
