import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id:1 , name: "Figurine Astérix ", description: 'À propos de cet article :' , price: 12.99 , size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021',imageUrl :'../assets/image/figurine Astérix .jpg'},
    {id:2, name: "Figurine Obelix ", description: 'À propos de cet article: ' , price: 13.99 ,size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021',imageUrl :'../assets/image/figurine obelix.jpg'},
    {id:3, name: "Figurine Bonnemine ", description: 'À propos de cet article :' , price: 14.99 ,size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021',imageUrl :'../assets/image/Figurine-Bonnemine.jpg'},
    {id:4, name: "Figurine Cesar ", description: 'À propos de cet article :' , price: 9.99 ,size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021', imageUrl :'../assets/image/Figurine-Cesar.jpg'},
    {id:5, name: "Figurine Panoramix ", description: 'À propos de cet article :' , price:16.99 ,size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021', imageUrl :'../assets/image/Figurine-Panoramix.jpg'},
    {id:6, name: "Figurine Pirate Barbe Rouge", description: 'À propos de cet article :' , price:19.99 ,size : 'Hauteur:23,5 cm ',weight : 'Poids: 300g', matter:'Matière :Résine', madein:'Fabriqué en :France',year:'Année : 2021', imageUrl :'../assets/image/Figurine-Pirate Barbe Rouge .jpg'}
  ]



  constructor() { }
}
