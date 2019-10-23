import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { ParallaxConf } from './paralax-config';
import { ComponentsService } from '../services/components.service';

interface Star {
  img: string;
  position: Position;
  conf: IParallaxScrollConfig;
}

interface Position {
  left: string;
  top: string;
}
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
}) 


export class StarsComponent implements OnInit{


  initialized=false;
  private LOGO = ("../../../assets/plane.png");
  private minStarsCount: number = 10;
  private maxStarsCount: number = 20;
  heightObj;
  

  stars: Array<Star> = [];
  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 1,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 80
  };  
  constructor(private componentsService:ComponentsService) {
    componentsService.paralaxEventEmitter.subscribe(x=>{
      this.heightObj=x;
      this.initialized=false
      setTimeout(()=>{this.initialized=true}, 2);
    })
   }

  ngOnInit() {
    this.generateStars();
  }

  generateStars() {
    for (let index = 0; index < this.generatedRandomStarsCount(); index++) {
      this.stars.push({
       // img: `https://github.com/farengeyt451/ng-example-parallax/blob/master/src/assets/ball-${Math.round(Math.random() * 2)}.png?raw=true`,
       img:this.LOGO, 
       position: this.generatePosition(),
        conf: new ParallaxConf()
      });
    }
  }

  
  generatePosition(): Position {
    let left = this.mathRandom(20)+(Math.random()>0.5?0:80)
    console.log(left)
    return {
      left: `${left}%`,
      top: `${this.mathRandom(50)}%`
    };
  }

  mathRandom(endpoint: number): number {
    return Math.round(Math.random() * endpoint);
  }

  generatedRandomStarsCount(): number {
    return Math.floor(
      Math.random() * (this.maxStarsCount - this.minStarsCount + 1) + this.minStarsCount
    );
  }

  onGalaxyGenerate() {
    this.stars = [];
    this.generateStars();
  }
}
