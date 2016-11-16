import {Routes} from '@angular/router';
import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Friends} from './components/friends/friends';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'friends', component: Friends},
  {path: 'home', component: Home},
  {path: 'about', component: About},
];

