import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent {

  ciudad: string = '';
  dineroControl = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ciudad = params['ciudad'];
    });
  }

  /**
   * Función para pasar el presupuesto a la siguiente pantalla
   */
  enviarPresupuesto() {
    this.dineroControl.value;
    this.router.navigate(['/info-viaje', this.ciudad, this.dineroControl.value]);
  }

}
