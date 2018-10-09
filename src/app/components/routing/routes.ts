import { Routes } from '@angular/router';

import { HowtouseComponent } from '../howtouse/howtouse.component';
import { SearchComponent   } from '../search/search.component';
import { ResultsComponent  } from '../results/results.component';

export const routes: Routes = [
  { path: 'howtouse',  component: HowtouseComponent },
  { path: 'howtouse',  component: HowtouseComponent },  
  { path: 'home',      component: ResultsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
