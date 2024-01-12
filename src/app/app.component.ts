import { Component,AfterViewInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
declare var google: any; // Declare 'google' to avoid TypeScript errors

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'assigment_1';
  
  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const location = { lat: 37.7749, lng: -122.4194 }; 

    const map = new google.maps.Map(document.getElementById('google-map'), {
      center: location,
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Philz Coffee Shop'
    });
}
mailTitles: string[] = [
  '+  New flow',
  'Coffee? . Marisa Lu',
  'Feedback . Lindsey Weiss',
  'Post-grad plans . Evelyn Ma',
  'Launch plan . Dennis Jin',
  'Victoria Wang',
  'Advait Kalakkad',
  'danny Trinh'
];

getMailTitleColor(index: number): string {
  const colorShade = Math.floor((index / this.mailTitles.length) * 200); // Adjust multiplier for lighter/darker shades
  return `rgb(${colorShade}, ${colorShade}, ${colorShade})`;
}
currentCardIndex = 0;

  showNextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % 3; // Rotate through 3 cards
  }
}
