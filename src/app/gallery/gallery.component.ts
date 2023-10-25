import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: string[] = [
    './assets/img/edit-img/side-jag.jpg',
    './assets/img/edit-img/front-landrover.jpg',
    './assets/img/edit-img/interior.jpg',
    './assets/img/edit-img/side-bigtruck.jpg',
    './assets/img/edit-img/side-merc.jpg',
    './assets/img/edit-img/clean-wheel.jpg'
    // Add more image URLs here
  ];
  currentIndex: number = 0;

  ngOnInit() {
    this.rotateImages();
  }

  rotateImages() {
    // setInterval(() => {
    //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
    // }, 5000); // Change image every 5 seconds (5000 milliseconds)/

    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}









