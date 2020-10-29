// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';
/*
TabLink File will take care of routing to Grocery page, About Us and Contact US Page
*/
const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        //Load the Grocery Page
        path: 'Grocery',
        loadChildren: () => import('../grocery/grocery.module').then(m => m.GroceryPageModule)
      },
      {
       // Load the Contact US Page
        path: 'Contact US',
        loadChildren: () => import('../contactus/contactus.module').then(m => m.ContactusPageModule)
      },
      {
        //Load the About US page
        path: 'About US',
        loadChildren: () => import('../aboutus/aboutus.module').then(m => m.AboutusPageModule)
      },
      //Default path to load Grocery page on load
      {
        path: '',
        redirectTo: '/tablinks/Grocery',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/Grocery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }
