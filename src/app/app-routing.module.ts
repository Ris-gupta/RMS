import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryComponent } from './components/category/category.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'category-details',
    component: CategoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
