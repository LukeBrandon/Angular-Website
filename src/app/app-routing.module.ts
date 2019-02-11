import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';


const routes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
