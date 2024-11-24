import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AddProductComponent } from '../add-product/add-product.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout riêng của Admin
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path: 'add-product', component: AddProductComponent},
      // Thêm các route con khác tại đây
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
