import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../not-found.component';
import { StarAddComponent } from 'src/app/home/star-add/star-add.component';

export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: '/home/star-add', pathMatch: 'full'
      },
      {
        path: 'star-add',
        component: StarAddComponent,
        data: {state: 'star-add'}
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
