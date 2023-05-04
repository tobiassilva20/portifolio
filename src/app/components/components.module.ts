import { NgModule } from '@angular/core';

import { Header } from './header/header';
import { Body } from './body/body.component';
import { NgbdNavVertical } from './nav-vertical/nav-vertical';

@NgModule({
  declarations: [
    
  ],
  imports: [
    Header, NgbdNavVertical, Body
  ],
  providers: [],
  exports: [Header, NgbdNavVertical, Body]

})
export class ComponentsModule { }