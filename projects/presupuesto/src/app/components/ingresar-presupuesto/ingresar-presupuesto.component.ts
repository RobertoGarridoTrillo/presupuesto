import {Component} from '@angular/core';
import {PresupuestoService} from "../../services/presupuesto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoService: PresupuestoService,
              private _router: Router) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  agregar() {
    this.cantidadIncorrecta = this.cantidad < 0;

    if (this.cantidad > 0) {
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this._router.navigate([('/gastos')])
    }
  }
}
