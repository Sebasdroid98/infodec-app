import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importamos el modulo de traducción
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisCiudadComponent } from './components/pais-ciudad/pais-ciudad.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { InfoViajeComponent } from './components/info-viaje/info-viaje.component';
import { ConsultasPreviasComponent } from './components/consultas-previas/consultas-previas.component';

// Función para cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PaisCiudadComponent,
    PresupuestoComponent,
    InfoViajeComponent,
    ConsultasPreviasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // importamos el modulo para hacer peticiones http
    FormsModule, // importamos el modulo para trabajar con los formularios
    ReactiveFormsModule, // importamos el modulo para trabajar con los formularios reactivos
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
