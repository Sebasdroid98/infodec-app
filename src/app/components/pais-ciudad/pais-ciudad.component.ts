import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Pais } from 'src/app/models/pais.model';
import { ApipropiaService } from 'src/app/services/apipropia.service';

@Component({
  selector: 'app-pais-ciudad',
  templateUrl: './pais-ciudad.component.html',
  styleUrls: ['./pais-ciudad.component.scss']
})
export class PaisCiudadComponent {

  // inicializamos las variables a utilizar
  paises: Pais[] = [];
  ciudades: Ciudad[] = [];
  paisId: number = 0;
  ciudadId: number = 0;
  // formValido: boolean = true;

  constructor(
    private apiPropiaService: ApipropiaService
  ) { }
  
  ngOnInit(): void {
    this.cargarPaises();
  }

  /**
   * Función que carga los paises
   */
  cargarPaises() {
    this.apiPropiaService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  /**
   * Función que carga las ciudades
   * @param paisId
   */
  cargarCiudades(event: Event) {
    const paisId = (event.target as HTMLSelectElement).value;
    this.paisId = parseInt(paisId);
    this.ciudadId = 0; // Se reinicia la ciudad seleccionada
    this.apiPropiaService.getCiudadesPorPaisId(this.paisId).subscribe((ciudades) => {
      this.ciudades = ciudades;
    });
  }

  /**
   * Función para seleccionar la ciudad
   * @param paisId
   */
  seleccionarCiudad(ciudadId: number) {
    this.ciudadId = ciudadId;
  }

}
