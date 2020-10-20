import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personas = [
    {
      nombre: 'paco',
      apellido: 'paton',
      dni: '70589334'
    },

    {
      nombre: 'jesus',
      apellido: 'sanchez',
      dni: '70589334B'
    },


    {
      nombre: 'alberto',
      apellido: 'gonzalez',
      dni: '70589334B'
    },

  ];




  elementos = [
    {
      icono: 'american-football-outline',
      ruta: '/pagina1',
      titulo: 'pagina1'
    },

    {
      icono: 'barbell-outline',
      ruta: '/pagina2',
      titulo: 'pagina2'
    },

  ];
  toastController: any;

  abrirYoutube(){
  window.open('https://www.youtube.com');
  }

  async toast(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 200
    });
  }

  constructor() {}

}
