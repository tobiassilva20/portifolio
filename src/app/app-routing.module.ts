import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/content/about/about.component';
import { EducationComponent } from './components/content/education/education.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'education', component: EducationComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
