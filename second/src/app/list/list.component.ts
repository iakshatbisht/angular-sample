import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters:any = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription: any;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
    this.subscription = this.swService.characterChanged.subscribe(
      () => {
        this.characters = this.swService.getChars(this.loadedSide);
      }
    );
   }

  ngOnInit(): void {
    //console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getChars(params.side);
        this.loadedSide = params.side;
      }
    );
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
