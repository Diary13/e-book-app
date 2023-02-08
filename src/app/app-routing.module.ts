import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { SellBookComponent } from './pages/sell-book/sell-book.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sell", component: SellBookComponent },
  { path: "sign-up/:active", component: FormsComponent },
  { path: "cart", component: CartComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
