import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Historial } from 'src/app/models/historial.model';
import { ApipropiaService } from 'src/app/services/apipropia.service';

@Component({
  selector: 'app-consultas-previas',
  templateUrl: './consultas-previas.component.html',
  styleUrls: ['./consultas-previas.component.scss']
})
export class ConsultasPreviasComponent {

  historial: Historial[] = [];

  // Objeto con los simbolos de las monedas a utilizar
  simbolosMoneda: any = {
    GBP: { nombre:'Libra esterlina', simbolo: '£'},
    JPY: { nombre:'Yen japonés', simbolo:'¥'},
    INR: { nombre:'Rupia india', simbolo:'₹'},
    DKK: { nombre:'Corona danesa', simbolo:'kr'},
    COP: { nombre:'Peso colombiano', simbolo:'$'}
  };

  constructor(
    private apiPropiaService: ApipropiaService,
    private translate: TranslateService
  ) { 
    // Obtener idioma de localStorage o establecer español por defecto
    const idiomaActual = localStorage.getItem('language') || 'es';
    this.translate.use(idiomaActual)
  }

  ngOnInit(): void {
    this.cargarHistorial();
  }

  /**
   * Función que carga el historial de consultas previas
   */
  cargarHistorial() {
    this.apiPropiaService.getHistorial().subscribe((historial) => {
      this.historial = historial;
    });
  }

}
