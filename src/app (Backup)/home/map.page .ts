import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

import * as L from 'leaflet';

export const mapL  = (): void => {
  //--------------------------
    // pegar localização  do celular
// pegar localização  do celular 
 
var x:any= 51.505; 
var y:any=-0.09; 
async function getUserCoordinates(): Promise<{ latitude: number, longitude: number }> {
  const position = await Geolocation.getCurrentPosition();
  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
}
getUserCoordinates()
  .then(coordinates => {
    console.log('Latitude:', coordinates.latitude);
    console.log('Longitude:', coordinates.longitude);
  })
  .catch(error => {
    
    console.error('Erro ao obter coordenadas:', error);
  });
  //export const local=localizacao; 

// end pegar localização  do celular 
// end pegar localização  do celular

  //--------------------------
  
  //const map = L.map('map').setView([51.505, -0.09], 13);
 /* const map = L.map('map').setView([x, y], 1);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();*/
    
};



 