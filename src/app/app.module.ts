import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TermsComponent } from './terms.component';
import { NewTermComponent } from './new-term.component';
import { TermDetailComponent } from './term-detail.component';
import { TermOtherDetailComponent } from './term-other-detail.component';
import { AddEnglishDefinitionComponent } from './add-english-definition.component';
import { AddOtherDefinitionComponent } from './add-other-definition.component';
import { NewTranslationComponent } from './new-translation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    TermsComponent,
    NewTermComponent,
    TermDetailComponent,
    TermOtherDetailComponent,
    AddEnglishDefinitionComponent,
    AddOtherDefinitionComponent,
    NewTranslationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
