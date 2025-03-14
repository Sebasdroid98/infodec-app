import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';
import { Ciudad } from '../models/ciudad.model';
import { Historial } from '../models/historial.model';

@Injectable({
  providedIn: 'root'
})
export class ApipropiaService {
  private readonly API_URL = 'http://127.0.0.1:8000/api';
  private climaApiKey = '781da7ef59f1b2ee7e8811d5abc61cef';
  private tasaCambioApiKey = '5e188b692e724b075759e28e';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Servicio para obtener la lista de paises desde la API
   * @returns Observable<Pais[]>
   */
  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.API_URL}/paises`);
  }

  /**
   * Servicio para obtener un pais por su id
   * @param id number
   * @returns Observable<Pais>
   */
  getPaisById(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.API_URL}/paises/${id}`);
  }

  /**
   * Servicio para obtener las ciudades de un pais por su id
   * @param id number
   * @returns Observable<Pais>
   */
  getCiudadesPorPaisId(id: number): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.API_URL}/ciudades-pais/${id}`);
  }

  /**
   * Servicio para obtener una ciudad por su id
   * @param id number
   * @returns Observable<Ciudad>
   */
  getCiudadPorId(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.API_URL}/ciudades/${id}`);
  }

  /**
   * Servicio para registrar un consulta en el historial
   * @param datos Historial
   * @returns Observable<Historial>
   */
  registrarHistorial(datos: Historial): Observable<Historial> {
    return this.http.post<Historial>(`${this.API_URL}/historial`, datos);
  }

  /**
   * Servicio para obtener el clima de una ciudad
   * @param ciudad string
   * @param pais string
   * @param idioma string
   * @returns Observable<any>
   */
  getClimaCiudad(ciudad: string, pais: string = 'CO', idioma: string = 'en'): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${this.climaApiKey}&units=metric&lang=${idioma}`;
    return this.http.get(url);
  }

  /**
   * Servicio para obtener la tasa de cambio de una moneda
   * @param moneda string
   * @returns Observable<any>
   */
  getTasaCambio(moneda: string): Observable<any> {
    const url = `https://v6.exchangerate-api.com/v6/${this.tasaCambioApiKey}/latest/${moneda}`;
    return this.http.get(url);
  }

}
