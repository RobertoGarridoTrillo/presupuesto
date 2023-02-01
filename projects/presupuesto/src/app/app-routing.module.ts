import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GastosComponent} from "./components/gastos/gastos.component";
import {IngresarPresupuestoComponent} from "./components/ingresar-presupuesto/ingresar-presupuesto.component";

const routes: Routes = [
  {path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}, // en caso de direccion vacía
  {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  /*{path: '**', redirectTo: ''} // en caso de dirección equivocada redirijo a vacía (al primer caso) */
  {path: '**', redirectTo: '/ingresarPresupuesto'} // en caso de dirección equivocada redirijo a principal,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
