import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { TermsComponent } from "./terms.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { NewTermComponent } from './new-term.component';
import { TermDetailComponent } from './term-detail.component';
import { TermOtherDetailComponent } from './term-other-detail.component';
import { AddEnglishDefinitionComponent } from './add-english-definition.component';
import { AddOtherDefinitionComponent } from './add-other-definition.component';
import { NewTranslationComponent } from './new-translation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'terms/create', component: NewTermComponent},
  { path: 'terms/detail/:id', component: TermDetailComponent},
  { path: 'other/detail/:id', component: TermOtherDetailComponent},
  { path: 'terms/add-definition/:id', component: AddEnglishDefinitionComponent},
  { path: 'other/add-definition/:id', component: AddOtherDefinitionComponent},
  { path: 'other/create/:id', component: NewTranslationComponent},

  // more routes are added here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
