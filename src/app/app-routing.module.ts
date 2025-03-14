import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisCiudadComponent } from './components/pais-ciudad/pais-ciudad.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { InfoViajeComponent } from './components/info-viaje/info-viaje.component';
import { ConsultasPreviasComponent } from './components/consultas-previas/consultas-previas.component';

const routes: Routes = [
  { path: 'pais-ciudad', component: PaisCiudadComponent },
  { path: 'presupuesto/:ciudad', component: PresupuestoComponent },
  { path: 'info-viaje/:ciudad/:dinero', component: InfoViajeComponent },
  { path: 'historial-presupuestos', component: ConsultasPreviasComponent },
  { path: '', redirectTo: '/pais-ciudad', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
