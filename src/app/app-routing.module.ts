/**
 * @author Marty Vo
 * @email marty.vo@abcam.com
 * @create date 2020-01-28 11:55:03
 * @modify date 2020-01-28 11:55:03
 * @desc [description]
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RequestsComponent } from './requests/requests.component';


const routes: Routes = [
  { path: '', pathMatch: 'prefix', component: RequestsComponent },
  { path: 'messages', component: MessagesListComponent },
  { path: 'requests', component: RequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
