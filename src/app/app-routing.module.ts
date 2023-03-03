import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FormsComponent } from './components/forms/forms.component';
import { AdminGuard } from './components/guards/admin.guard';
import { AuthGuard } from './components/guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { SellBookComponent } from './pages/sell-book/sell-book.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: "user", component: UserPageComponent, children: [
      { path: "", component: HomeComponent },
      { path: "sell", component: SellBookComponent },
      { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
      { path: "sign-up/:active", component: FormsComponent },
    ]
  },
  {
    path: "admin", component: AdminPageComponent, canActivate: [AdminGuard]
  },
  { path: "**", redirectTo: "user", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
