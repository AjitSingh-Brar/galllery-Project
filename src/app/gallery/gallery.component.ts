import { ImageService } from './../image-detail/shared/image.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  title= 'My Travel Memories';
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) { 
    this.visibleImages =this.imageService.getImages();
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

}
