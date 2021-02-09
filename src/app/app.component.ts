import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $(document).ready(function () {
      $("#example").textition({
        speed: 1.3,
        animation: "ease-in-out",
        map: { x: 100, y: 100, z: 0 },
        autoplay: true,
        interval: 2.2,
      });
    });

  }
}
