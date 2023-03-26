import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartelleComponent } from './components/cartelle/cartelle.component';
import { CartelleDetailsComponent } from './components/cartelle/cartelle-details/cartelle-details.component';
import { CartelleSottocartelaComponent } from './components/cartelle/cartelle-sottocartela/cartelle-sottocartela.component';


const routes: Routes = [
  { path: 'path/to/page/:item', component: CartelleDetailsComponent },
  { path: 'path/to/page/:item/:sottocartela', component: CartelleSottocartelaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
