import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id:1 , name: "Figurine astérix ", description: 'À propos de cet article :' , price: 12.99 , size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024',imageUrl :'../assets/image/figurine Astérix .jpg',descriptionCard:'Retrouvez ici Astérix, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'},
    {id:2, name: "Figurine obelix ", description: 'À propos de cet article: ' , price: 13.99 ,size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024',imageUrl :'../assets/image/figurine obelix.jpg',descriptionCard:'Retrouvez ici Obelix, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'},
    {id:3, name: "Figurine bonnemine ", description: 'À propos de cet article :' , price: 14.99 ,size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024',imageUrl :'../assets/image/Figurine-Bonnemine.jpg',descriptionCard:'Retrouvez ici Bonnemine, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'},
    {id:4, name: "Figurine cesar ", description: 'À propos de cet article :' , price: 9.99 ,size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024', imageUrl :'../assets/image/Figurine-Cesar.jpg',descriptionCard:'Retrouvez ici Cesar, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'},
    {id:5, name: "Figurine panoramix ", description: 'À propos de cet article :' , price:16.99 ,size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024', imageUrl :'../assets/image/Figurine-Panoramix.jpg',descriptionCard:'Retrouvez ici Panoramix, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'},
    {id:6, name: "Figurine pirate Barbe Rouge", description: 'À propos de cet article :' , price:19.99 ,size : 'Hauteur: 19 cm ',weight : 'Poids: 40g', matter:'Matière : Résine', madein:'Fabriqué en : France',year:'Année : 2024', imageUrl :'../assets/image/Figurine-Pirate Barbe Rouge .jpg',descriptionCard:'Retrouvez ici Barbe Rouge, de la célèbre série Astérix et Obélix par Uderzo et Goscinny.Format : 9 x 19 X 12 cm, fabriquée en résine.'}
  ]

  apropos = [
    {nameapropos: "Au Petit Village"}
   
  ]



  constructor() { }
}
