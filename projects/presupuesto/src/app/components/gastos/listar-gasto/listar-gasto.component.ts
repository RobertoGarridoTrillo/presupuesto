import {Component, OnDestroy, OnInit} from '@angular/core';
import {PresupuestoService} from "../../../services/presupuesto.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.listGastos.push(data);
      this.restante -= data.cantidad;
    });
    this.presupuesto = 0;
    this.restante = 0;
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
