import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Header } from './header/header';
import { NgbdNavVertical } from './nav-vertical/nav-vertical';

@NgModule({
  declarations: [
    
  ],
  imports: [
    Header, NgbdNavVertical
  ],
  providers: [],
  exports: [Header, NgbdNavVertical]

})
export class ComponentsModule { }