import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { CartelleComponent } from './components/cartelle/cartelle.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { CartelleDetailsComponent } from './components/cartelle/cartelle-details/cartelle-details.component';
import { HeadComponent } from './components/head/head.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CaricadocumentoComponent } from './components/caricadocumento/caricadocumento.component';
import { CartelleSottocartelaComponent } from './components/cartelle/cartelle-sottocartela/cartelle-sottocartela.component';
import { CaricamentoComponent } from './components/toast/caricamento/caricamento.component';
import { SuccessoComponent } from './components/toast/successo/successo.component';
import { ErrorComponent } from './components/toast/error/error.component';
import { CartelleVuotaComponent } from './components/cartelle/cartelle-vuota/cartelle-vuota.component';
import { CartelleHeaderComponent } from './components/cartelle/cartelle-header/cartelle-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchAgencyComponent } from './components/search-agency/search-agency.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: MainpageComponent },
  {path: 'Details', component: TableComponent },
  {path: 'Sottocartela', component: CartelleSottocartelaComponent },
  {path: 'Toast', component: CaricamentoComponent },
  {path: 'Vuota', component: CartelleVuotaComponent },
  {path: 'Modal', component: ModalComponent },
  {path: 'SearchAgency', component: SearchAgencyComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    CartelleComponent,
    TableComponent,
    CartelleDetailsComponent,
    HeadComponent,
    MainpageComponent,
    CaricadocumentoComponent,
    CartelleSottocartelaComponent,
    CaricamentoComponent,
    SuccessoComponent,
    ErrorComponent,
    CartelleVuotaComponent,
    CartelleHeaderComponent,
    ModalComponent,
    SearchAgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CartelleComponent],
})
export class AppModule { }
