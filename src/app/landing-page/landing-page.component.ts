import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  constructor(private router: Router){}
 ngOnInit(): void {
     
 }

onContinue() {
    // this.router.navigateByUrl('facesnaps');
    this.router.navigateByUrl('facesnaps');
}
}
