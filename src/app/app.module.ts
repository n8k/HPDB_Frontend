import { BrowserModule 			} from '@angular/platform-browser';
import { NgModule 					} from '@angular/core';

// Font Awesome
import { FontAwesomeModule 	} from '@fortawesome/angular-fontawesome';
import { library  					}	from '@fortawesome/fontawesome-svg-core';
import { fas 								} from '@fortawesome/free-solid-svg-icons';
import { fab 								} from '@fortawesome/free-brands-svg-icons';
import { far 								} from '@fortawesome/free-regular-svg-icons'
import { MaterialModule 		} from './modules/material.module';
library.add(fas,far,fab);

// Routing
import { RoutingModule 			} from './components/routing/routing.module'; 
import { provideRoutes 			} from '@angular/router';

// Shared
import { baseURL 									} from './shared/baseURL';
import { RestangularConfigFactory } from './shared/restConfig';

// Service
import { EpisodeService 		} from './services/episode.service';

// Restangular
import { RestangularModule,
				 Restangular 				} from 'ngx-restangular';

// Forms
import { FormsModule 				} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

// Components
import { AppComponent 			} from './app.component';
import { HeaderComponent 		} from './components/header/header.component';
import { FooterComponent 		} from './components/footer/footer.component';
import { HowtouseComponent 	} from './components/howtouse/howtouse.component';
import { SearchComponent    } from './components/search/search.component';
import { BasicComponent 		} from './components/search/basic/basic.component';
import { DirectorComponent  } from './components/search/director/director.component';
import { WriterComponent 		} from './components/search/writer/writer.component';
import { CrimeComponent 		} from './components/search/crime/crime.component';
import { TropesComponent 		} from './components/search/tropes/tropes.component';
import { ResultsComponent 	} from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HowtouseComponent,
    SearchComponent,
    BasicComponent,
    DirectorComponent,
    WriterComponent,
    CrimeComponent,
    TropesComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
  EpisodeService,
  {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
