import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValuesComponent } from './values/values.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'values', component: ValuesComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
