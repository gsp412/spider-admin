import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component'

export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: './list/list.module#ListModule',
        title1: '数据管理',
        title2: '基础表格'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];