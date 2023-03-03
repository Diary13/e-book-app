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
import { CartComponent } from './components/cart/cart.component';
import { BookCartViewComponent } from './components/book-cart-view/book-cart-view.component';
import { PopupConfirmComponent } from './components/popup-confirm/popup-confirm.component';
import { AuthService } from './components/forms/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCommonModule } from '@angular/material/core';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


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
    CartComponent,
    BookCartViewComponent,
    PopupConfirmComponent,
    HomeAdminComponent,
    UserPageComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    MatSnackBarModule,
    MatCommonModule
  ],
  providers: [
    AuthService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql',
          }),
        };
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
