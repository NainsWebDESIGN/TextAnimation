import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleComponent } from './title/title.component';

const routes: Routes = [
  { path: '', redirectTo: '/title', pathMatch: 'full' },
  { path: 'title', component: TitleComponent },
  { path: '**', redirectTo: '/title', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
