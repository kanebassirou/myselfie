import { Component, OnInit ,Input, OnDestroy} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
import { Observable, Subscription, interval } from 'rxjs'; 
import { __values } from 'tslib';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit ,OnDestroy{
  @Input() faceSnape!: FaceSnap;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
constructor(private faceSnapsService:FaceSnapsService,
  private router:Router){
  
}
secondes !:number;
  counterSubscription!: Subscription;      
  
  ngOnInit() {
    const counter = interval(100); // Utilisez interval directement depuis 'rxjs'
    this.counterSubscription=counter.subscribe(
      (value)=> {
        this.secondes = value;
      },
      // (error)=>{
      //   console.log('oh ee'+error);
      // },
      // ()=>{
      //   console.log('complete');
      // }
      )
    
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnape.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnape.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
}
onViewfaceSnap(){
  this.router.navigateByUrl(`facesnaps/${this.faceSnape.id}`);

}
ngOnDestroy(): void {
  this.counterSubscription.unsubscribe();
    
}

}
