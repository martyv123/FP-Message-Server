import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RequestsComponent } from './requests/requests.component';


const routes: Routes = [
  { path: 'messages', component: MessagesListComponent },
  { path: 'requests', component: RequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
