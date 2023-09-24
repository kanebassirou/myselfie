import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';

const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent }, 
    { path: '' , component: LandingPageComponent },
    { path: 'page-introuvable', component: PageIntrouvableComponent },
    { path: '**', redirectTo: '/page-introuvable' },

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    
    ],
   
    exports: [
      RouterModule
    ]
  })
  
export class AppRoutingModule {
    
}