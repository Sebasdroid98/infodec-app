import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Historial } from 'src/app/models/historial.model';
import { ApipropiaService } from 'src/app/services/apipropia.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-info-viaje',
  templateUrl: './info-viaje.component.html',
  styleUrls: ['./info-viaje.component.scss']
})
export class InfoViajeComponent {
  // Variables pasadas por la URL
  ciudad: string = '';
  dinero: number = 0;

  // Variables generales
  dineroConvertido: number = 0;
  monedaPorDefecto: string = 'COP';
  infoCiudad: Ciudad = { id: 0, nombre: '', codigo_clima: '', pais: { id: 0, nombre: '', codigo_moneda: '' } };
  infoClima: any = {};
  infoDinero: any = {};
  tasaCambio: number = 0;
  historial: Historial = { presupuesto_original: 0, presupuesto_convertido: 0, clima: '', temperatura: '', tasa_cambio: '', ciudad_id: 0 };
  btnGuardarPresupuesto: boolean = false;

  // Objeto con los simbolos de las monedas a utilizar
  simbolosMoneda: any = {
    GBP: { nombre:'Libra esterlina', simbolo: '£'},
    JPY: { nombre:'Yen japonés', simbolo:'¥'},
    INR: { nombre:'Rupia india', simbolo:'₹'},
    DKK: { nombre:'Corona danesa', simbolo:'kr'},
    COP: { nombre:'Peso colombiano', simbolo:'$'}
  };

  constructor(
    private route: ActivatedRoute,
    private apiPropiaService: ApipropiaService
  ) { }

  ngOnInit(): void {
    // Se obtienen los parametros de la URL
    this.route.params.subscribe((params) => {
      this.ciudad = params['ciudad'];
      this.dinero = params['dinero'];
    });

    // Se obtiene la información de la ciudad por su id
    this.apiPropiaService.getCiudadPorId(parseInt(this.ciudad)).subscribe((ciudad) => {
      this.infoCiudad = ciudad;
      this.consultarClima();
    });
  }

  /**
   * Función para consultar el clima de la ciudad elegida previamente
   */
  consultarClima() {
    var codigoClima = (this.infoCiudad.codigo_clima).split(',');
    console.log(codigoClima);

    this.apiPropiaService.getClimaCiudad(codigoClima[0], codigoClima[1], 'es').subscribe((clima) => {
      this.infoClima = clima;
      this.convertirMoneda();
    });
  }

  /**
   * Función para convertir el dinero a la moneda del país de destino elegido previamente
   */
  convertirMoneda() {
    this.apiPropiaService.getTasaCambio(this.monedaPorDefecto).subscribe((exchange) => {
      this.infoDinero = exchange;
      var tasaCambio = exchange.conversion_rates[this.infoCiudad.pais.codigo_moneda];
      this.dineroConvertido = this.dinero * tasaCambio;
      this.tasaCambio = tasaCambio;
    });
  }

  /**
   * Función para guardar el presupuesto en la base de datos
   */
  guardarPresupuesto() {
    var datosPresupuesto = {
      presupuesto_original: this.dinero,
      presupuesto_convertido: this.dineroConvertido,
      clima: this.infoClima.weather[0].description,
      temperatura: (this.infoClima.main.temp).toString(),
      tasa_cambio: (this.tasaCambio).toString(),
      ciudad_id: this.infoCiudad.id
    };
    this.apiPropiaService.storeHistorial(datosPresupuesto).subscribe((res) => {
      console.log(res);
      this.mostrarMensajeCorrecto('Presupuesto guardado con exito!');
      this.btnGuardarPresupuesto = true;
    });
  }

  /**
   * Función para mostrar un mensaje de éxito al guardar el presupuesto
   */
  mostrarMensajeCorrecto(mensaje: string): void {
    Toastify({
      text: mensaje,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#189586",
      },
    }).showToast();
  }

}
