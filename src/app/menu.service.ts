import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getElementos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/elementos`);
  }

  getEventos(elementoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/eventos/${elementoId}`);
  }

  getActividades(eventoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/actividades/${eventoId}`);
  }
}
