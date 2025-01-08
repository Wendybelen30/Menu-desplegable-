import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  elementos: any[] = [];
  eventos: any[] = [];
  actividades: any[] = [];
  constructor(private menuService: MenuService) {}
  ngOnInit() {
    this.cargarElementos();
  }
  cargarElementos() {
    this.menuService.getElementos().subscribe(
      (data) => {
        console.log('Datos recibidos del servicio:', data);
        this.elementos = data;
      },
      (error) => {
        console.error('Error al obtener los elementos:', error);
      }
    );
  }
  mostrarEventos(elementoId: number) {
    this.eventos = []; 
    this.actividades = [];
    this.menuService.getEventos(elementoId).subscribe((data) => {
      this.eventos = data;
    });
  }
  mostrarActividades(eventoId: number) {
    this.actividades = [];
    this.menuService.getActividades(eventoId).subscribe((data) => {
      this.actividades = data;
    });
  }
}

