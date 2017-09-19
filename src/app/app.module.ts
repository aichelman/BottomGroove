import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./app/app.component";
import {BlogComponent} from "./blog/blog.component";
import {RouterModule, Routes} from "@angular/router";
import routerConfig from "./AppRoutingModule";
import { NavComponent } from './nav/nav.component';
import { ProshopComponent } from './proshop/proshop.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavComponent,
    ProshopComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot([{path: 'blogs',component:BlogComponent}])
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
