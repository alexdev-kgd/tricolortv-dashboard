import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'stats',
        component: StatisticsComponent,
        data: { animation: 'StatsPage' },
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        data: { animation: 'ArticlesPage' },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: { animation: 'StaffPage' },
      },
      {
        path: 'modules',
        component: ModulesComponent,
        data: { animation: 'ModulesPage' },
      },
      {
        path: 'comments',
        component: CommentsComponent,
        data: { animation: 'CommentsPage' },
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { animation: 'SettingsPage' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
