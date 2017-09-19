import { RouterModule, Routes } from '@angular/router'
import {BlogComponent} from "./blog/blog.component";
import {AppComponent} from "./app/app.component";
import {ProshopComponent} from "./proshop/proshop.component";
import {AboutComponent} from "./about/about.component";

const routerConfig : Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'proshop',
    component: ProshopComponent
  },
{
path:'blogs',
component: BlogComponent
},
{
path:'**',
redirectTo : '/home',
pathMatch: 'full'
},
{
path:'',
redirectTo : '/home',
pathMatch: 'full'}
];

export default routerConfig

