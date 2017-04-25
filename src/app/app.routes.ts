import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';
/**
 * Created by treadstone on 4/25/17.
 */

export const routes: Routes = [
  {path: 'directory', component: DirectoryComponent},
  {path: '', component: HomeComponent}
];
export const routing: ModuleWithProviders =
  RouterModule.forRoot(routes);
