import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0)
  }

  getImage(id: number)
  {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}


const IMAGES =[

  {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/boat_01.jpeg"},
  {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"assets/img/boat_02.jpeg"},
  {"id":3, "category": "boats", "caption": "Sukh Di's enjoying moment", "url":"assets/img/boat_03.jpeg"},
  {"id":4, "category": "boats", "caption": "London Dockyard", "url":"assets/img/boat_04.jpeg"},
  {"id":5, "category": "boats", "caption": "Enjoying vacation with Sister", "url":"assets/img/boat_05.jpeg"},
  {"id":6, "category": "camping", "caption": "Camping Trip", "url":"assets/img/camping_01.jpeg"},
  {"id":7, "category": "camping", "caption": "Adam and Keven", "url":"assets/img/camping_02.jpeg"},
  {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/camping_03.jpeg"},
  {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/camping_04.jpg"},
  {"id":10, "category": "camping", "caption": "Camping spot", "url":"assets/img/camping_05.jpeg"},
  {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/camping_06.jpg"},
  {"id":12, "category": "camping", "caption": "Hiking trip 2019", "url":"assets/img/camping_07.jpeg"},
  {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/library_01.jpeg"},
  {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/library_02.jpeg"},
  {"id":15, "category": "library", "caption": "Sunday afternoon", "url":"assets/img/library_03.jpeg"},
  {"id":16, "category": "library", "caption": "Local library", "url":"assets/img/library_04.jpeg"},
  {"id":17, "category": "library", "caption": "Beautiful library", "url":"assets/img/library_05.jpeg"}

];