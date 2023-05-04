import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Header } from './header/header';
import { NgbdNavVertical } from './nav-vertical/nav-vertical';
import { Content } from './content/content.component';
import { Body } from './body/body.component';

@NgModule({
  declarations: [],
  imports: [
    Header, NgbdNavVertical, Body, Content, NgbModule
  ],
  providers: [],
  exports: [Header, NgbdNavVertical, Body, Content],
})
export class ComponentsModule { }