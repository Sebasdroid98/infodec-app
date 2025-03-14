import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infodec-app';

  constructor(private translate: TranslateService) {
    // Obtener idioma de localStorage o establecer español por defecto
    const idiomaActual = localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(idiomaActual);
    this.translate.use(idiomaActual);
  }

  /**
   * Función para cambiar el idioma de la aplicación
   * @param idioma Idioma a cambiar
   */
  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    localStorage.setItem('language', idioma); // Guardar en localStorage
  }
}
