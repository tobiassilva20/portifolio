import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Header } from './header/header';
import { NgbdNavVertical } from './nav-vertical/nav-vertical';
import { Body } from './body/body.component';
import { EducationComponent } from './content/education/education.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { FormationComponent } from './content/formation/formation.component';

@NgModule({
  declarations: [

  
    EducationComponent,
        SkillsComponent,
        ProjectsComponent,
        FormationComponent
  ],
  imports: [
    Header, NgbdNavVertical, Body, NgbModule],
  providers: [],
  exports: [Header, NgbdNavVertical, Body],
})
export class ComponentsModule { }