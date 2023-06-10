
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    this.mapL();
  }

  async mapL(): Promise<void> {
    // Pega as coordenadas do usuário
    const position = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = position.coords;

    // Inicializar o mapa com as coordenadas do usuário
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup('........<br> .........')
      .openPopup();
  }
}



