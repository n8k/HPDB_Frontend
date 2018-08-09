import { Routes } from '@angular/router';

import { HowtouseComponent } from '../howtouse/howtouse.component';
import { SearchComponent   } from '../search/search.component';

export const routes: Routes = [
  { path: 'howtouse',  component: HowtouseComponent },
  { path: 'home',      component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
