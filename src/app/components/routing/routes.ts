import { Routes } from '@angular/router';

import { HowtouseComponent } from '../howtouse/howtouse.component';
import { SearchComponent   } from '../search/search.component';
import { EpisodeDetailComponent } from '../episode-detail/episode-detail.component';
import { AboutComponent 				} from '../about/about.component';

export const routes: Routes = [
  { path: 'about',  component: AboutComponent },
  { path: '',      component: SearchComponent },
  { path: 'search',    component: SearchComponent },
  { path: 'id/:episodeId',      component: EpisodeDetailComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' }
];
