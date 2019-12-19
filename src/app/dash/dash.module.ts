import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashComponent} from './dash.component';
import {RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ProjectComponent } from './content/project/project.component';
import { CommunicationComponent } from './content/communication/communication.component';

const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    DashComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    DashboardComponent,
    ProjectComponent,
    CommunicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class DashModule { }
