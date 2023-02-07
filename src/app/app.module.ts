import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { JumbotronBooksComponent } from './components/jumbotron-books/jumbotron-books.component';
import { SellBookComponent } from './pages/sell-book/sell-book.component';
import { ToolbarFilterComponent } from './components/toolbar-filter/toolbar-filter.component';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    ContactComponent,
    FormsComponent,
    HomeComponent,
    ServiceComponent,
    JumbotronBooksComponent,
    SellBookComponent,
    ToolbarFilterComponent,
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
