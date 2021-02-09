import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $("#example").textition({
      speed: 1.3,
      animation: "ease-in-out",
      map: { x: 100, y: 100, z: 0 },
      autoplay: true,
      interval: 2.2,
    });
  }
}
